import { useState } from 'react';
import Head from 'next/head';

const AssistantPage = () => {
  const [blogContent, setBlogContent] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setSummary('');
    try {
      const response = await fetch('/api/generate-summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blogContent }),
      });

      const data = await response.json();
      if (response.ok) {
        setSummary(data.summary);
      } else {
        setSummary(`Error: ${data.message}`);
      }
    } catch (error) {
      setSummary('Failed to connect to the server.');
    }
    setIsLoading(false);
  };

  return (
    // This is the main outer div
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
      <Head>
        <title>AI Assistant</title>
      </Head>
      
      {/* The <main> tag wraps all the visible content */}
      <main>
        <h1>AI Summary Assistant</h1>
        <p>Paste your full blog post content below to generate a summary.</p>

        <textarea
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          placeholder="Paste your full blog post content here..."
          rows={15}
          style={{ width: '100%', padding: '10px', fontSize: '1rem', border: '1px solid #ccc' }}
        />

        <button
          onClick={handleGenerateSummary}
          disabled={isLoading || !blogContent}
          style={{ display: 'block', marginTop: '20px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}
        >
          {isLoading ? 'Generating...' : 'Generate Summary'}
        </button>

        {summary && (
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}>
            <h2>Generated Summary:</h2>
            <p>{summary}</p>
          </div>
        )}
      </main> 
      {/* The </main> tag closes here */}

    </div>
    // The main outer div closes here
  );
};

export default AssistantPage;