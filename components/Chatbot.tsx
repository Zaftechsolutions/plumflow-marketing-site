'use client';

import { useEffect, useRef, useState } from 'react';

type Msg = { role: 'user' | 'assistant'; content: string };

const GREETING =
  "Hi, I'm Ash. Ask me anything about how PlumFlow finds commercial plumbing contracts, what it costs to run outreach, or how a demo works.";

const PROMPTS = [
  'How does PlumFlow find leads?',
  'What makes the emails different?',
  'How much does it cost?',
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: 'assistant', content: GREETING }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, busy, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 120);
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    const next: Msg[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(next);
    setInput('');
    setBusy(true);
    // Placeholder assistant bubble we stream into.
    setMessages((m) => [...m, { role: 'assistant', content: '' }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Drop the static greeting; the server only needs the real exchange.
        body: JSON.stringify({ messages: next.filter((_, i) => i !== 0) }),
      });

      if (!res.ok || !res.body) {
        const msg =
          res.status === 429
            ? 'That is a lot of questions in a short time. Give it a minute and try again.'
            : 'Sorry, something went wrong. Email Info@plumflow.io and a real person will help.';
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: 'assistant', content: msg };
          return copy;
        });
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = '';
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: 'assistant', content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: 'assistant',
          content: 'Sorry, I could not connect. Please try again in a moment.',
        };
        return copy;
      });
    } finally {
      setBusy(false);
    }
  }

  const streaming = busy && messages[messages.length - 1]?.role === 'assistant';
  const waitingFirstToken = streaming && messages[messages.length - 1].content === '';

  return (
    <>
      <button
        className="cb-launch"
        aria-label={open ? 'Close chat' : 'Chat with PlumFlow'}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
        )}
      </button>

      {open && (
        <div className="cb-panel" role="dialog" aria-label="Chat with PlumFlow">
          <div className="cb-head">
            <div className="cb-head-l">
              <span className="cb-dot" />
              <div>
                <b>Ash</b>
                <span>PlumFlow assistant</span>
              </div>
            </div>
            <button className="cb-x" aria-label="Close" onClick={() => setOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          <div className="cb-body" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`cb-row ${m.role}`}>
                <div className="cb-bubble">
                  {m.content}
                  {waitingFirstToken && i === messages.length - 1 && (
                    <span className="cb-typing"><i /><i /><i /></span>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="cb-chips">
                {PROMPTS.map((p) => (
                  <button key={p} onClick={() => send(p)} disabled={busy}>{p}</button>
                ))}
              </div>
            )}
          </div>

          <form
            className="cb-input"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              placeholder="Ask about PlumFlow..."
            />
            <button type="submit" aria-label="Send" disabled={busy || !input.trim()}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            </button>
          </form>
          <div className="cb-foot">Answers can be imperfect. For specifics, book a demo.</div>
        </div>
      )}

      <style>{`
        .cb-launch {
          position: fixed; bottom: 22px; right: 22px; z-index: 1000;
          width: 56px; height: 56px; border-radius: 50%; border: none; cursor: pointer;
          background: var(--ink); color: var(--white);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 30px -8px rgba(6,12,18,0.5);
          transition: transform 0.15s ease, background 0.15s ease;
        }
        .cb-launch:hover { transform: translateY(-2px); background: var(--accent); }

        .cb-panel {
          position: fixed; bottom: 90px; right: 22px; z-index: 1000;
          width: 384px; max-width: calc(100vw - 32px);
          height: 560px; max-height: calc(100vh - 130px);
          background: var(--white); border: 1px solid var(--line); border-radius: 16px;
          box-shadow: 0 24px 60px -18px rgba(6,12,18,0.4);
          display: flex; flex-direction: column; overflow: hidden;
          animation: cbIn 0.2s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes cbIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }

        .cb-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; background: var(--ink); color: var(--white); }
        .cb-head-l { display: flex; align-items: center; gap: 11px; }
        .cb-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--accent-lt); box-shadow: 0 0 0 4px rgba(121,203,214,0.2); }
        .cb-head-l b { font-family: var(--font-d); font-size: 15px; display: block; line-height: 1.2; }
        .cb-head-l span { font-size: 11.5px; color: rgba(255,255,255,0.6); }
        .cb-x { background: none; border: none; color: rgba(255,255,255,0.7); cursor: pointer; padding: 4px; display: flex; }
        .cb-x:hover { color: #fff; }

        .cb-body { flex: 1; overflow-y: auto; padding: 18px 16px; display: flex; flex-direction: column; gap: 12px; background: var(--paper); }
        .cb-body::-webkit-scrollbar { width: 7px; }
        .cb-body::-webkit-scrollbar-thumb { background: var(--line); border-radius: 4px; }

        .cb-row { display: flex; }
        .cb-row.user { justify-content: flex-end; }
        .cb-bubble {
          max-width: 84%; padding: 10px 13px; border-radius: 13px; font-size: 14px; line-height: 1.55;
          white-space: pre-wrap; word-wrap: break-word;
        }
        .cb-row.assistant .cb-bubble { background: var(--white); border: 1px solid var(--line); color: var(--tx); border-bottom-left-radius: 4px; }
        .cb-row.user .cb-bubble { background: var(--ink); color: var(--white); border-bottom-right-radius: 4px; }

        .cb-typing { display: inline-flex; gap: 4px; align-items: center; height: 14px; }
        .cb-typing i { width: 6px; height: 6px; border-radius: 50%; background: var(--tx-3); animation: cbBounce 1.2s infinite ease-in-out; }
        .cb-typing i:nth-child(2) { animation-delay: 0.15s; }
        .cb-typing i:nth-child(3) { animation-delay: 0.3s; }
        @keyframes cbBounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.5; } 30% { transform: translateY(-4px); opacity: 1; } }

        .cb-chips { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
        .cb-chips button {
          text-align: left; font-size: 13px; font-weight: 500; color: var(--tx-2);
          background: var(--white); border: 1px solid var(--line); border-radius: 10px; padding: 9px 13px; cursor: pointer;
          transition: border-color 0.15s, color 0.15s;
        }
        .cb-chips button:hover:not(:disabled) { border-color: var(--accent); color: var(--ink); }

        .cb-input { display: flex; align-items: flex-end; gap: 8px; padding: 12px; border-top: 1px solid var(--line-2); background: var(--white); }
        .cb-input textarea {
          flex: 1; resize: none; border: 1px solid var(--line); border-radius: 10px; padding: 10px 12px;
          font-family: var(--font-b); font-size: 14px; line-height: 1.4; color: var(--tx); outline: none;
          max-height: 96px; background: var(--paper);
        }
        .cb-input textarea:focus { border-color: var(--accent); }
        .cb-input button {
          flex-shrink: 0; width: 40px; height: 40px; border-radius: 10px; border: none; cursor: pointer;
          background: var(--accent); color: #fff; display: flex; align-items: center; justify-content: center;
          transition: background 0.15s;
        }
        .cb-input button:disabled { background: var(--line); color: var(--tx-3); cursor: not-allowed; }
        .cb-input button:not(:disabled):hover { background: var(--accent-dk); }

        .cb-foot { font-size: 10.5px; color: var(--tx-3); text-align: center; padding: 0 16px 10px; background: var(--white); }

        @media (max-width: 560px) {
          .cb-panel { right: 12px; left: 12px; width: auto; bottom: 82px; height: calc(100vh - 110px); }
          .cb-launch { bottom: 16px; right: 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cb-panel { animation: none; }
          .cb-typing i { animation: none; }
          .cb-launch { transition: none; }
        }
      `}</style>
    </>
  );
}
