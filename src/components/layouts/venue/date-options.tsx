"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
import TimeSlotSelector from "./time-slot"

const days = [
    { day: 'Min', date: '4 Agu' },
    { day: 'Sen', date: '5 Agu' },
    { day: 'Sel', date: '6 Agu' },
    { day: 'Rab', date: '7 Agu' },
    { day: 'Kam', date: '8 Agu' },
    { day: 'Jum', date: '9 Agu' },
    { day: 'Sab', date: '10 Agu' }
];

export default function CalendarNavigation() {
    const [activeTab, setActiveTab] = useState('0');

    return (
        <Tabs defaultValue="0" onValueChange={setActiveTab} className="w-full md:w-[80%]">
            <TabsList className="grid grid-cols-7 bg-gray-200 h-full">
                {days.map((day, index) => (
                    <TabsTrigger
                        key={index}
                        value={index.toString()}
                        className="TabsTrigger py-3 flex-col"
                    >
                        <h1>{day.day}</h1>
                        <p>{day.date}</p>
                    </TabsTrigger>
                ))}
            </TabsList>
            {days.map((day, index) => (
                <TabsContent key={index} value={index.toString()} className="mt-6 bg-transparent">
                    <TimeSlotSelector/>
                </TabsContent>
            ))}
        </Tabs>
    );
}
