// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, feedback } = req.body.userdata;
    res.status(200).json({ enteredEmail: email, enteredFeedback: feedback });
  } else {
    res.status(200).json({ name: 'John Doe' })
  }
}

