'use client';

import { useConversation } from '@elevenlabs/react';
import { useCallback, useMemo } from 'react';
import { getStableUserId } from '@/app/lib/user-id';

export function Conversation() {
  const conversation = useConversation({
    onConnect: () => console.log('Connected'),
    onDisconnect: () => console.log('Disconnected'),
    onMessage: (m) => console.log('Message:', m),
    onError: (e) => console.error('Error:', e),
  });

  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;
  const userId = useMemo(() => getStableUserId(), []);

  const startConversation = useCallback(async () => {
    try {
      if (!agentId) {
        console.error('Missing NEXT_PUBLIC_ELEVENLABS_AGENT_ID');
        alert('Missing NEXT_PUBLIC_ELEVENLABS_AGENT_ID');
        return;
      }

      // mic permission must happen from a user gesture
      await navigator.mediaDevices.getUserMedia({ audio: true });

      await conversation.startSession({
        agentId,
        userId,
        connectionType: 'webrtc', // required
      });
    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }, [conversation, agentId, userId]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <button onClick={startConversation}
                disabled={conversation.status === 'connected'}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300">
          Start Conversation
        </button>
        <button onClick={stopConversation}
                disabled={conversation.status !== 'connected'}
                className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300">
          Stop Conversation
        </button>
      </div>
      <div className="flex flex-col items-center">
        <p>Status: {conversation.status}</p>
        <p>Agent is {conversation.isSpeaking ? 'speaking' : 'listening'}</p>
      </div>
    </div>
  );
}
