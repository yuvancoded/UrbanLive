import requests

GROQ_API_KEY = "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"

def ask_urby(user_message):

    try:
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {GROQ_API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                
  "model": "llama-3.1-8b-instant",               
 "messages": [
                    {
                        "role": "system",
                        "content": """
You are Urby, a professional real estate and livability expert.

Rules:
- Speak like a consultant (clear, smart, confident)
- Give actionable advice
- Focus on:
  • best locations
  • investment insights
  • livability (AQI, infra, safety)
- Avoid generic or vague answers
- Keep answers concise but insightful
"""
                    },
                    {
                        "role": "user",
                        "content": user_message
                    }
                ]
            }
        )

        data = response.json()

        if "choices" in data:
            return data["choices"][0]["message"]["content"]

        else:
            return f"Error: {data}"

    except Exception as e:
        return f"Server error: {str(e)}"