import { PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';

export default async function sendPushNotification() {
  try {
    console.log("Entered sendPushNotifications");

    // Initialize the wallet signer
    // WARNING: Managing private keys on the frontend is not recommended for production
    const signer = ethers.Wallet.createRandom();

    // Initialize Push Protocol user
    const userAlice = await PushAPI.initialize(signer, { env: 'staging' });

    // Send the notification
    const apiResponse = await userAlice.channel.send(['*'], { 
      notification: {
        title: 'Hello World Notification',
        body: 'Web3 native notifications are here!',
      }
    });

    console.log('Notification sent successfully', apiResponse);
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

  
  