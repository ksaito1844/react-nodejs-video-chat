import React, { useEffect, useContext } from 'react';
import Layout from '../components/Layout';
import { setNotification, resetNotification } from '../app/features/notificationSlice';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import Chat from '../components/Chat';
import { Navigate } from 'react-router-dom';
import { SocketContext } from '../context/socket';

const PrivateRoom = () => {
  console.log('privateRoom rendered')
  const socket = useContext(SocketContext)
  const dispatch = useAppDispatch()
  const room = useAppSelector(state  => state.room)
  const userId = useAppSelector(state => state.user.id)

  useEffect(() => {
    console.log('remove enter chat room listener')
    socket.removeAllListeners('enter chat room')
  }, [socket])
  const userHasAccess = room.users.includes(userId)

  if (!userHasAccess) {
    const notificationData = {
      notificationContent: 'You do not have access to this room.',
      notificationType: 'is-warning',
      isLoading: false,
      isActive: true,
      }
    dispatch(setNotification(notificationData))
    setTimeout(() => dispatch(resetNotification()), 5000)
    return <Navigate to="/" />
    
  } else {
    return (
      <Layout>
        {userHasAccess ? <Chat /> : <p>No access</p>}
      </Layout>
    )
  }
}

export default PrivateRoom