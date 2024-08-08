import React, { useState } from "react";

const timeSlots = [
  { time: "18:00 - 19:00", price: "Rp240.000", booked: false },
  { time: "19:00 - 20:00", price: "Booked", booked: true },
  { time: "20:00 - 21:00", price: "Booked", booked: true },
  { time: "21:00 - 22:00", price: "Rp240.000", booked: false },
  { time: "21:00 - 22:00", price: "Rp240.000", booked: false },
  { time: "21:00 - 22:00", price: "Rp240.000", booked: false }
];

interface TimeSlotCardProps {
  time: string;
  price: string;
  booked: boolean;
  selected: boolean;
  onClick: () => void;
}

const TimeSlotCard: React.FC<TimeSlotCardProps> = ({ time, price, booked, selected, onClick }) => (
  <div
    className={`border rounded-lg p-4 text-center cursor-pointer ${
      selected
        ? "bg-gray-100 border-gray-500 text-gray-500"
        : booked
        ? "text-gray-400 border-gray-200"
        : "border-gray-500"
    }`}
    onClick={onClick}
  >
    <div className="text-xs font-medium">{booked ? "60 Menit" : "60 Menit"}</div>
    <div className={`text-md font-bold ${booked ? "text-gray-400" : ""}`}>{time}</div>
    <div className={`text-sm ${booked ? "text-gray-400" : "text-gray-500"}`}>{price}</div>
  </div>
);

const TimeSlotSelector: React.FC = () => {
  const [selectedSlots, setSelectedSlots] = useState<number[]>([]);

  const toggleSlot = (index: number) => {
    if (selectedSlots.includes(index)) {
      setSelectedSlots(selectedSlots.filter((slot) => slot !== index));
    } else {
      setSelectedSlots([...selectedSlots, index]);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {timeSlots.map((slot, index) => (
        <TimeSlotCard
          key={index}
          time={slot.time}
          price={slot.price}
          booked={slot.booked}
          selected={selectedSlots.includes(index)}
          onClick={() => !slot.booked && toggleSlot(index)}
        />
      ))}
    </div>
  );
};

export default TimeSlotSelector;
