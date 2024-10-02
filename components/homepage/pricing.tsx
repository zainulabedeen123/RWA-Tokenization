"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { loadStripe } from "@stripe/stripe-js"
import { toast } from "sonner"
import { TITLE_TAILWIND_CLASS } from "@/utils/constants"
import { useRouter } from "next/navigation"

type PricingCardProps = {
    user: any
    handleCheckout: any
    title: string
    description: string
    features: string[]
    actionLabel: string
    exclusive?: boolean
}

const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <section className="text-center">
        <h1 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}>{title}</h1>
        <p className="text-gray-600 dark:text-gray-400 pt-1">{subtitle}</p>
        <br />
    </section>
)

const PricingCard = ({ user, handleCheckout, title, description, features, actionLabel, exclusive }: PricingCardProps) => {
    const router = useRouter();
    return (
        <Card
            className={cn(`w-72 flex flex-col justify-between py-1 ${exclusive ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`, {
                "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
                    exclusive,
            })}>
            <div>
                <CardHeader className="pb-8 pt-4">
                    <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
                    <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    {features.map((feature: string) => (
                        <CheckItem key={feature} text={feature} />
                    ))}
                </CardContent>
            </div>
            <CardFooter className="mt-2">
                <Button
                    onClick={() => {
                        if (user?.id) {
                            handleCheckout(true)
                        } else {
                            toast("Please login or sign up to proceed", {
                                description: "You must be logged in to continue",
                                action: {
                                    label: "Sign Up",
                                    onClick: () => {
                                        router.push("/sign-up")
                                    },
                                },
                            })
                        }
                    }}
                    className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    type="button"
                >
                    <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                    {actionLabel}
                </Button>
            </CardFooter>
        </Card>
    )
}

const CheckItem = ({ text }: { text: string }) => (
    <div className="flex gap-2">
        <CheckCircle2 size={18} className="my-auto text-green-400" />
        <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
    </div>
)

export default function Pricing() {
    const { user } = useUser();
    const [stripePromise, setStripePromise] = useState<Promise<any> | null>(null)

    useEffect(() => {
        setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!))
    }, [])

    const handleCheckout = async (subscription: boolean) => {
        try {
            const { data } = await axios.post(`/api/payments/create-checkout-session`,
                { userId: user?.id, email: user?.emailAddresses?.[0]?.emailAddress, subscription });

            if (data.sessionId) {
                const stripe = await stripePromise;
                const response = await stripe?.redirectToCheckout({
                    sessionId: data.sessionId,
                });
                return response
            } else {
                console.error('Failed to create checkout session');
                toast('Failed to create checkout session')
                return
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            toast('Error during checkout')
            return
        }
    };

    const plans = [
        {
            title: "Real Estate Investments",
            description: "Secure returns on construction projects with a 10% ROI over 24 months.",
            features: ["Low risk", "Guaranteed ROI", "Asset-backed security"],
            actionLabel: "Invest Now",
        },
        {
            title: "Green Tech Investments",
            description: "Invest in eco-friendly startups with potential 15-20% ROI.",
            features: ["Medium risk", "Support sustainability", "Growth-driven returns"],
            actionLabel: "Invest Now",
            exclusive: true,
        },
        {
            title: "Robots & AI Investments",
            description: "High-risk, high-reward AI and Robotics ventures with up to 35% ROI.",
            features: ["High risk", "Cutting-edge innovation", "Potential for exponential returns"],
            actionLabel: "Invest Now",
        },
    ]

    return (
        <div>
            <PricingHeader title="Investment Opportunities" subtitle="Explore our portfolio categories and start investing today." />
            <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
                {plans.map((plan) => {
                    return <PricingCard user={user} handleCheckout={handleCheckout} key={plan.title} {...plan} />
                })}
            </section>
        </div>
    )
}
