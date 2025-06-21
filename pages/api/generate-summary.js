import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { blogContent } = req.body;

  if (!blogContent) {
    return res.status(400).json({ message: 'Blog content is required' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an expert content editor. Your task is to write a concise, one-paragraph summary of the following blog post content."
        },
        {
          role: "user",
          content: blogContent
        }
      ],
      temperature: 0.7,
      max_tokens: 100,
    });

    const summary = response.choices[0].message.content.trim();
    res.status(200).json({ summary });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error generating summary" });
  }
}