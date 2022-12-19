import { API_KEY } from "../apiKey"

export const AiAPICall = async (text) => {
    const response = await fetch(`http://api.wolframalpha.com/v1/conversation.jsp?appid=${API_KEY}&i=${text}%3f`)
    const result = await response.json()
    console.log(result)
    return result
}