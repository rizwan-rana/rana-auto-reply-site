import { useState } from "react";

export default function ChatDashboard() {
  const [messages, setMessages] = useState([
    { text: "Hi Rizwan, how are you?", sender: "Ash" },
    { text: "I’m good, baby. Missed you!", sender: "Me" },
  ]);
  const [input, setInput] = useState("");
  const [trainingData, setTrainingData] = useState({
    contact: "",
    relationship: "",
    tone: "",
    sampleMessage: "",
    reply: ""
  });
  const [savedTraining, setSavedTraining] = useState([]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "Me" };
    setMessages([...messages, newMessage]);
    setInput("");
    // Here we can call your AI backend with fetch('/api/chat')
  };

  const saveTrainingData = () => {
    if (trainingData.contact && trainingData.sampleMessage && trainingData.reply) {
      setSavedTraining([...savedTraining, trainingData]);
      setTrainingData({ contact: "", relationship: "", tone: "", sampleMessage: "", reply: "" });
    }
  };

  return (
    <div className="p-4 h-screen flex flex-col">
      <h1 className="text-xl font-bold mb-2">Rizwan Auto Chat Dashboard</h1>

      <div className="flex gap-4">
        <div className="flex-1">
          <div className="h-96 overflow-y-auto border rounded-lg p-4 bg-white shadow-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 flex ${msg.sender === "Me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-2 rounded-xl max-w-xs text-sm ${
                    msg.sender === "Me" ? "bg-green-100 text-right" : "bg-gray-100"
                  }`}
                >
                  <div className="font-semibold text-xs text-gray-600">{msg.sender}</div>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-r-lg"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>

        <div className="w-1/3 border rounded-lg p-4 bg-white shadow-sm">
          <h2 className="font-bold text-md mb-2">Train AI Response</h2>
          <input
            type="text"
            placeholder="Contact Name"
            className="mb-2 p-2 w-full border rounded"
            value={trainingData.contact}
            onChange={(e) => setTrainingData({ ...trainingData, contact: e.target.value })}
          />
          <input
            type="text"
            placeholder="Relationship"
            className="mb-2 p-2 w-full border rounded"
            value={trainingData.relationship}
            onChange={(e) => setTrainingData({ ...trainingData, relationship: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tone"
            className="mb-2 p-2 w-full border rounded"
            value={trainingData.tone}
            onChange={(e) => setTrainingData({ ...trainingData, tone: e.target.value })}
          />
          <textarea
            placeholder="Sample Incoming Message"
            className="mb-2 p-2 w-full border rounded"
            rows={2}
            value={trainingData.sampleMessage}
            onChange={(e) => setTrainingData({ ...trainingData, sampleMessage: e.target.value })}
          />
          <textarea
            placeholder="Expected Reply"
            className="mb-2 p-2 w-full border rounded"
            rows={2}
            value={trainingData.reply}
            onChange={(e) => setTrainingData({ ...trainingData, reply: e.target.value })}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            onClick={saveTrainingData}
          >
            Save Training
          </button>
        </div>
      </div>
    </div>
  );
}
