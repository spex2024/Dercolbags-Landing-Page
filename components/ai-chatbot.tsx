"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, MessageCircleMore, Minimize2, SendHorizonal, Sparkles, User2 } from "lucide-react"

type ChatMessage = {
  id: string
  role: "assistant" | "user"
  text: string
}

const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    text: "Hi, I’m the DercolBags AI assistant. I can help with eco-packaging options, bulk orders, and custom bag recommendations.",
  },
]

const quickPrompts = [
  "Recommend eco-friendly bags",
  "What custom packaging do you offer?",
  "Help me with a bulk order",
]

function buildReply(input: string) {
  const normalized = input.toLowerCase()

  if (normalized.includes("bulk")) {
    return "We support bulk and B2B packaging orders with flexible quantities, branded finishes, and repeat supply planning. Share your estimated volume and I can point you to the best starting option."
  }

  if (normalized.includes("custom") || normalized.includes("branding")) {
    return "We can tailor bag size, material, print style, and finish for your brand. A great next step is choosing whether you want kraft, recyclable, or biodegradable packaging."
  }

  if (normalized.includes("eco") || normalized.includes("sustainable") || normalized.includes("biodegradable")) {
    return "Our most popular eco-conscious options include kraft paper packaging, recyclable carry bags, and biodegradable ranges for brands that want lower-impact materials without losing presentation quality."
  }

  return "I can help you explore sustainable materials, custom packaging, and order planning. Tell me what product you’re packaging and roughly how many units you need."
}

export function AiChatbot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const [messages, setMessages] = React.useState<ChatMessage[]>(initialMessages)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, isTyping])

  const sendMessage = React.useCallback((raw: string) => {
    const text = raw.trim()
    if (!text) return

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      text,
    }

    setMessages((current) => [...current, userMessage])
    setInput("")
    setIsTyping(true)

    window.setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        text: buildReply(text),
      }

      setMessages((current) => [...current, assistantMessage])
      setIsTyping(false)
    }, 850)
  }, [])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="fixed right-4 bottom-28 z-[120] md:right-6 md:bottom-6">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-[2rem] border border-emerald-200 bg-white/95 text-zinc-900 shadow-[0_30px_80px_-24px_rgba(16,185,129,0.28)] backdrop-blur-2xl dark:border-emerald-400/15 dark:bg-[linear-gradient(180deg,rgba(8,14,18,0.98),rgba(5,10,14,0.96))] dark:text-white dark:shadow-[0_30px_90px_-24px_rgba(5,150,105,0.48)]"
          >
            <div className="relative overflow-hidden border-b border-emerald-100 px-5 py-4 dark:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/14 via-transparent to-lime-300/16 dark:from-emerald-500/18 dark:via-transparent dark:to-cyan-400/10" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/12 ring-1 ring-emerald-500/25 dark:bg-emerald-500/20 dark:ring-emerald-400/30">
                    <Bot className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-black tracking-tight">AI Packaging Assistant</p>
                    <p className="text-xs text-emerald-700/70 dark:text-emerald-200/70">Online now for instant guidance</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-emerald-500/8 p-2 text-zinc-600 transition hover:bg-emerald-500/14 hover:text-zinc-900 dark:bg-white/8 dark:text-white/75 dark:hover:bg-white/14 dark:hover:text-white"
                  aria-label="Minimize chat"
                >
                  <Minimize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="max-h-[24rem] space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-lg ${
                      message.role === "user"
                        ? "rounded-br-xl bg-emerald-500 text-white dark:bg-emerald-500"
                        : "rounded-bl-xl border border-emerald-100 bg-emerald-50/70 text-zinc-800 dark:border-white/10 dark:bg-white/6 dark:text-zinc-100"
                    }`}
                  >
                    <div className="mb-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-white/55">
                      {message.role === "user" ? <User2 className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-300" />}
                      <span>{message.role === "user" ? "You" : "Assistant"}</span>
                    </div>
                    <p>{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="rounded-3xl rounded-bl-xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/6">
                    <div className="flex items-center gap-1.5">
                      <motion.span
                        className="h-2 w-2 rounded-full bg-emerald-300"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                      />
                      <motion.span
                        className="h-2 w-2 rounded-full bg-emerald-300"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.12 }}
                      />
                      <motion.span
                        className="h-2 w-2 rounded-full bg-emerald-300"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.24 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </div>

            <div className="border-t border-emerald-100 px-4 pt-4 pb-4 dark:border-white/10">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100 dark:border-emerald-400/20 dark:bg-emerald-400/8 dark:text-emerald-100 dark:hover:border-emerald-300/40 dark:hover:bg-emerald-400/14"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white p-2 dark:border-white/10 dark:bg-white/6">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about packaging, pricing, or materials..."
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:text-white dark:placeholder:text-zinc-500"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white transition hover:bg-emerald-400"
                  aria-label="Send message"
                >
                  <SendHorizonal className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="chat-trigger"
            type="button"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex items-center gap-3 rounded-full border border-emerald-200 bg-white p-3 md:px-4 md:py-3 text-zinc-900 shadow-[0_20px_50px_-18px_rgba(16,185,129,0.35)] transition hover:-translate-y-0.5 dark:border-emerald-300/30 dark:bg-zinc-950 dark:text-white dark:shadow-[0_20px_50px_-18px_rgba(16,185,129,0.7)]"
          >
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/18 via-transparent to-lime-300/18 dark:from-emerald-500/20 dark:via-transparent dark:to-cyan-400/20"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3.2, repeat: Infinity }}
            />
            <span className="relative flex h-14 w-14 md:h-11 md:w-11 items-center justify-center rounded-full bg-emerald-500 text-white">
              <MessageCircleMore className="h-6 w-6 md:h-5 md:w-5" />
            </span>
            <span className="relative pr-2 text-left hidden md:block">
              <span className="block text-sm font-semibold">Chat with AI</span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400">Packaging help in seconds</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
