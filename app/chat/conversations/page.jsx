import Chat from '../../../components/Chat';
import { AiAPICall } from '../../../API/Ai';


export default async function ChatPage() {
  const response = await AiAPICall('What time is in Tokio')

  return (
    <div>
      <Chat response={response.result} />
    </div>
  )
}
