"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, ArrowRight, QrCode } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-gray-900">ScanSmart</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/dangers" className="text-gray-600 hover:text-red-600 transition-colors">
              Dangers
            </Link>
            <Link href="/prevention" className="text-gray-600 hover:text-red-600 transition-colors">
              Prevention
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* page content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">PROTECTED</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🎉 CONGRATULATIONS! 🎉
            <br />
            <span className="text-green-600">You've Been Saved!</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            You just scanned a QR code that could have been a malicious scam. Instead of falling victim, you've landed on this educational page designed to protect you and others from QR code fraud.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/dangers">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Learn About QR Dangers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/prevention">
              <Button size="lg" variant="outline">
                How to Stay Safe
                <Shield className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* what happened card */}
        <Card className="mb-16 border-gray-200 bg-white-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <QrCode className="h-6 w-6 text-black-600" />
              <span>What Just Happened?</span>
            </CardTitle>
            <CardDescription>Understanding your close call with a QR code scam</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">The Scenario</h3>
                <p className="text-gray-600">
                  You scanned a QR code that appeared real but was actually part of a security awareness demonstration. In a real scam, this could have led to:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Malicious website downloads</li>
                  <li>• Phishing login pages</li>
                  <li>• Financial fraud attempts</li>
                  <li>• Personal data theft</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Your Protection</h3>
                <p className="text-gray-600">
                  Instead of falling victim, you have been saved and redirected to this educational website. This demonstration aims to show you how easily QR codes can be manipulated and why caution is essential.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6" />
            <span className="text-xl font-bold">ScanSmart</span>
          </div>
          <p className="text-gray-400 mb-4">UNSW COMP6441 SECURITY PROJECT</p>
        </div>
      </footer>
    </div>
  )
}
