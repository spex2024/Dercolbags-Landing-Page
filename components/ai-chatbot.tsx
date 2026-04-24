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
    text: "DercolBags AI Protocol // Online. I can assist with sustainable materials, industrial packaging, and bulk order logistics.",
  },
]

const quickPrompts = [
  "Eco-friendly Materials",
  "Custom Industrial Packaging",
  "Bulk Order Logistics",
]

function buildReply(input: string) {
  const normalized = input.toLowerCase()

  if (normalized.includes("bulk")) {
    return "Industrial supply chain active. We support high-volume B2B orders with structured lead times and custom branding protocols. Specify your unit requirements for a logistical overview."
  }

  if (normalized.includes("custom") || normalized.includes("branding")) {
    return "Architectural customization available. We tailor dimensions, material density, and industrial finishes. Choose between Kraft, Recyclable, or Biodegradable substrates."
  }

  if (normalized.includes("eco") || normalized.includes("sustainable") || normalized.includes("biodegradable")) {
    return "Sustainability parameters confirmed. Our primary focus is Kraft-based high-strength packaging and recycled polymer alternatives for circular economies."
  }

  return "Protocol acknowledged. Specify your packaging requirements (material, volume, application) for architectural guidance."
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
            className="w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-none border border-zinc-200 bg-white/95 text-zinc-900 shadow-none backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950 dark:text-white"
          >
            <div className="relative overflow-hidden border-b border-zinc-100 px-5 py-4 dark:border-white/10">
              <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-none bg-zinc-100 border border-zinc-200 dark:bg-white/5 dark:border-white/10">
                    <Bot className="h-5 w-5 text-zinc-900 dark:text-white" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-black tracking-tighter uppercase">AI Terminal</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Status: Operational</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-none bg-zinc-100 p-2 text-zinc-600 transition hover:bg-zinc-200 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10"
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
                    className={`max-w-[85%] rounded-none px-4 py-3 text-sm leading-relaxed border ${
                      message.role === "user"
                        ? "bg-zinc-950 text-white border-zinc-800"
                        : "border-zinc-100 bg-zinc-50 text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
                    }`}
                  >
                    <div className="mb-1 flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-zinc-400 dark:text-zinc-500">
                      {message.role === "user" ? <User2 className="h-3 w-3" /> : <Sparkles className="h-3 w-3 text-emerald-500" />}
                      <span>{message.role === "user" ? "Client" : "System"}</span>
                    </div>
                    <p className="font-medium tracking-tight">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="rounded-none border border-zinc-100 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center gap-1.5">
                      <motion.span
                        className="h-1.5 w-1.5 bg-emerald-500"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                      <motion.span
                        className="h-1.5 w-1.5 bg-emerald-500"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.12 }}
                      />
                      <motion.span
                        className="h-1.5 w-1.5 bg-emerald-500"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.24 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </div>

            <div className="border-t border-zinc-100 px-4 pt-4 pb-4 dark:border-white/10">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="rounded-none border border-zinc-200 bg-zinc-50 px-3 py-2 text-[10px] font-black uppercase tracking-tighter text-zinc-600 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-none border border-zinc-200 bg-white p-2 dark:border-white/10 dark:bg-white/5">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Inquiry description..."
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:text-white dark:placeholder:text-zinc-500"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 items-center justify-center rounded-none bg-zinc-950 text-white transition hover:bg-emerald-600"
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
            className="group relative flex items-center gap-3 rounded-none border border-zinc-200 bg-white p-3 md:px-4 md:py-3 text-zinc-900 shadow-none transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-zinc-950 dark:text-white"
          >
            <span className="relative flex h-14 w-14 md:h-11 md:w-11 items-center justify-center rounded-none bg-zinc-950 text-white group-hover:bg-emerald-600 transition-colors">
              <MessageCircleMore className="h-6 w-6 md:h-5 md:w-5" />
            </span>
            <span className="relative pr-2 text-left hidden md:block">
              <span className="block text-sm font-black uppercase tracking-tighter">AI Terminal</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Log inquiry</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
