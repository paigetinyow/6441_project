import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, CheckCircle, Eye, Globe, Lock, AlertTriangle, Lightbulb, Users } from "lucide-react"
import Link from "next/link"

export default function PreventionPage() {
  const preventionTips = [
    {
      title: "Inspect Before You Scan",
      description: "Always examine QR codes carefully before scanning",
      icon: Eye,
      tips: [
        "Look for signs of tampering (stickers, overlays)",
        "Check if the code looks professionally printed",
        "Verify the source and context of the QR code for authenticity",
        "Be suspicious of codes in unexpected locations",
      ],
    },
    {
      title: "Verify the URL",
      description: "Check the destination before proceeding",
      icon: Globe,
      tips: [
        "Preview the URL before visiting the website ",
        "Look for typos and spelling errors and mistakes in the URL",
        "Look for HTTPS encryption (secure connection)",
        "Verify the domain matches the expected organisation",
      ],
    },
    {
      title: "Protect Personal Data",
      description: "Never share sensitive information via QR code forms",
      icon: Lock,
      tips: [
        "Don't enter passwords on QR-linked sites",
        "Avoid sharing financial information",
        "Be cautious with personal details",
      ],
    },
    {
      title: "Be Smart",
      description: "Watch out for red flags",
      icon: Lightbulb,
      tips: [
        "Too Good to Be True: Offers that seem unrealistic or overly generous (e.g. Free $500 gift card, scan to claim!)",
        "Urgent Action Required: Messages claiming immediate action is needed (e.g. Scan now or lose access to your account!)",
        "Unexpected Locations: QR codes in unusual or suspicious places",
        "Poor Quality: Codes that look hastily made or unprofessional, blurry prints or misaligned stickers",
      ],
    },
  ]

  const securityChecklist = [
    "Examine the QR code for physical tampering",
    "Preview the URL destination before visiting",
    "Verify if the website has a secure connect (HTTP)",
    "Check if the domain matches the expected organisation",
    "Look for spelling errors in URLs",
    "Avoid entering sensitive information",
    "Use official apps when possible",
    "Report suspicious QR codes to authorities",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Shield className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">ScanSmart</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/dangers" className="text-gray-600 hover:text-green-600 transition-colors">
              Dangers
            </Link>
            <Link href="/prevention" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">
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
            <span className="font-semibold">PROTECTION GUIDE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            How to Stay Safe from
            <br />
            <span className="text-green-600">QR Code Scams</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Protect yourself and others with these strategies and best practice techniques. Knowledge is your best defense against QR code fraud.
          </p>
        </div>

        {/* content tabs */}
        <Tabs defaultValue="basics" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basics">Tips</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="response">Response</TabsTrigger>
          </TabsList>

          {/* tips */}
          <TabsContent value="basics" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Prevention Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {preventionTips.map((tip, index) => (
                <Card key={index} className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <tip.icon className="h-6 w-6 text-green-600" />
                      <span>{tip.title}</span>
                    </CardTitle>
                    <CardDescription>{tip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tip.tips.map((tipItem, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {tipItem}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* tools */}
          <TabsContent value="tools" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Security Tools</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle>Secure QR Scanners (Andriod and iOS)</CardTitle>
                  <CardDescription>Apps with built in security features for both Andriod and iOS</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Built in camera apps (iOS/Android)</li>
                    <li>• TrendMicro's Safe QR Code Reader</li>
                    <li>• QR & Barcode Scanner by Gamma Play</li>
                    <li>• QR Code Reader by TeaCapps</li>
                    <li>• QR & Barcode Reader by QR SCAN Team</li>
                    <li>• QR Scanner by Simple Design</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle>Secure QR Scanners (Andriod)</CardTitle>
                  <CardDescription>Apps with built in security features for only Andriod</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• QR & Barcode Reader by QR SCAN Team</li>
                    <li>• QR Scanner by Simple Design</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle>Secure QR Scanners (iOS)</CardTitle>
                  <CardDescription>Apps with built in security features for only iOS</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• QR Reader for iPhone by TapMedia</li>
                    <li>• QR Code Reader by Mixerbox</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* response */}
          <TabsContent value="response" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What to Do If You've Been Scammed</h2>
            <Alert className="border-red-200 bg-red-50 mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Act Quickly!</AlertTitle>
              <AlertDescription>
                If you suspect you've fallen victim to a QR code scam, time is critical.
              </AlertDescription>
            </Alert>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700">Immediate Actions</CardTitle>
                  <CardDescription>Take these steps right away</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        1
                      </span>
                      <div>
                        <strong>Act fast to prevent further losses - Bank details</strong>
                        <p className="text-sm text-gray-600">If your bank details wre given, contact your bank or card provider immediately to report the scam</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        2
                      </span>
                      <div>
                        <strong>Act fast to prevent further losses - Account information</strong>
                        <p className="text-sm text-gray-600">If you account information was given update all important account passwords not just for the one app</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        3
                      </span>
                      <div>
                        <strong>Warn others and report the scam</strong>
                        <p className="text-sm text-gray-600">Once you have secured your details, warn others of the scam by reporting it to ScamWatch</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        4
                      </span>
                      <div>
                        <strong>Watch out for follow up scams</strong>
                        <p className="text-sm text-gray-600">If they have succeeded they will often times come back for more</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700">Report the Incident</CardTitle>
                  <CardDescription>Help prevent others from being victimised</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>ScamWatch</strong>
                      <p className="text-sm text-gray-600">Report the scam to warn other people</p>
                    </li>
                    <li>
                      <strong>Police</strong>
                      <p className="text-sm text-gray-600">Report the incident to the police online</p>
                    </li>
                    <li>
                      <strong>Support - Beyond Blue</strong>
                      <p className="text-sm text-gray-600">1300 22 4636 or online (24 hours a day, 7 days a week)</p>
                    </li>
                    <li>
                      <strong>Support - Lifeline</strong>
                      <p className="text-sm text-gray-600">13 11 14 or online (24 hours a day, 7 days a week)</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* security checklist */}
        <section className="mb-16">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span>QR Code Security Checklist</span>
              </CardTitle>
              <CardDescription>Use this checklist every time you encounter a QR code</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {securityChecklist.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* share knowledge card */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Share This Knowledge</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Help protect the people you know by sharing what you have learned. Learn more about the dangers and real world situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dangers">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Learn About The Dangers
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resources</h2>
        <Card className="mb-16 border-gray-200 bg-white-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Know how to protect yourself</span>
            </CardTitle>
            <CardDescription>Protect yourself with the correct tips and tools. Use these trusted links to read more information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tips to avoid QR code scams</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>
                    <a href="https://www.crimestoppersvic.com.au/events/decoding-qr-code-scams/"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      Decoding QR Code Scams
                    </a>
                  </li>
                  <li>
                    <a href="https://cybershack.com.au/consumer-advice/qr-code-scams-how-to-spot-and-stop-them-guide/"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      QR code scams now at epidemic level
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thalesgroup.com/en/worldwide-digital-identity-and-security/enterprise-cybersecurity/magazine/qr-jacks-and-quishing-how"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      How to protect yourself from the growing QR code scam threat
                    </a>
                  </li>
                </ul>
              </div>
              <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tools to protect against QR code scams</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                  <li>
                    <a href="https://www.uniqode.com/blog/qr-code-basics/best-qr-code-scanner-apps#Best-QR-Code-scanners-for-iOS-and-Android"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      7 Best QR Code Scanner Apps in 2025
                    </a>
                  </li>
                  <li>
                    <a href="https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/protect-your-organizations-against-qr-code-phishing-with-defender-for-office-365/4007041"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      Microsoft Defender
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mcafee.com/en-us/scam-detector/"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      Text Scam Detector
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* footer */}
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
