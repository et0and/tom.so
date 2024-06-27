"use client";

import { useState, useEffect } from 'react';
import { ArenaClient, ArenaChannelContents, GetChannelContentsApiResponse } from 'arena-ts';

interface ArenaChannelProps {
  channelSlug: string;
}

const ArenaChannel: React.FC<ArenaChannelProps> = ({ channelSlug }) => {
  const [contents, setContents] = useState<readonly ArenaChannelContents[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = new ArenaClient({ 
      token: 'eSqhV7TjnW4GKK2fWU0SnEZGJSbSo6P1cFf0mMLhVmI'
    });
    const channelApi = client.channel(channelSlug);

    channelApi.contents()
      .then((response: GetChannelContentsApiResponse) => {
        setContents(response.contents);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching channel contents:', error);
        setError('Failed to fetch channel contents');
        setLoading(false);
      });
  }, [channelSlug]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-4">{error}</div>;
  if (!contents) return <div className="text-center py-4">No content available.</div>;

  return (
    <div className="arena-channel">
      <h2 className="text-2xl font-bold mb-4">{channelSlug}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {contents.map((content) => (
          <div key={content.id} className="content-item border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {content.class === 'Image' && content.image && (
              <img src={content.image.display.url} alt={content.title || 'Image'} className="w-full h-48 object-cover" />
            )}
            {content.class === 'Text' && (
              <div className="p-4" dangerouslySetInnerHTML={{ __html: content.content_html || '' }} />
            )}
            {content.class === 'Link' && content.source && (
              <a href={content.source.url} className="block p-4 hover:bg-gray-50" target="_blank" rel="noopener noreferrer">
                {content.title || content.source.url}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArenaChannel;