import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, CreditCard, Lock, Eye, Download } from "lucide-react"
import Link from "next/link"

export default function DangersPage() {
  const scamTypes = [
    {
      title: "Phishing (Quishing)",
      description: "QR codes directing to a website that looks legitimate to gather personal information",
      icon: Lock,
      examples: ["Emails or letters claiming to be from tax authorities, banks or government", "Survey posters or ads promising rewards for feedback", "Most public QR codes where a filled form is required"],
    },
    {
      title: "Fake Payment Requests",
      description: "QR codes that claim to help process payment/refund but instead harvests financial information",
      icon: CreditCard,
      examples: ["Online marketplace chats (e.g. Facebook Marketplace, eBay)", "QR payment slips or invoices", "Pop-up stores or unverified social media sellers who provide QR payment codes"],
    },
    {
      title: "Malware Installation",
      description: "QR codes that leads to an app being download containing spyware or trackers that can be hidden in any QR codes",
      icon: Download,
      examples: ["Record your screen or microphone to gather information", "Track your GPS location", "Financial Exploitation"],
    },
    {
      title: "Wi-Fi Spoofing and Data Harvesting",
      description: "QR codes that configures devices to join a Wi-Fi network controlled by the attacker to gather personal information",
      icon: Eye,
      examples: ["Cafes or public venues with free Wi-Fi", "Airport lounge posters that blend in with legitimate signage", "Conference booths or coworking spaces"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Shield className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-gray-900">ScanSmart</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/dangers" className="text-red-600 font-semibold border-b-2 border-red-600 pb-1">
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
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-semibold">DANGER ZONE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The Hidden Dangers of
            <br />
            <span className="text-red-600">QR Code Scams</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            QR codes have risen in popularity being used in our daily lives. However their convenience comes with serious security risks. Learn about the various ways criminals exploit QR codes to steal money, data, and identities.
          </p>
        </div>

        {/* common scam types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common QR Code Scams</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {scamTypes.map((scam, index) => (
              <Card key={index} className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <scam.icon className="h-6 w-6 text-red-600" />
                    <span>{scam.title}</span>
                  </CardTitle>
                  <CardDescription>{scam.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Common Examples:</h4>
                  <ul className="space-y-1">
                    {scam.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* real world cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Real-World Cases</h2>
          {/* letter QR code */}
          <Card className="mb-16 border-gray-200 bg-white-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Suspicious VAT Verification Letter in the UK</span>
            </CardTitle>
            <CardDescription>Phishing through malicious links</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">The Scenario</h3>
                <p className="text-gray-600" style={{ marginBottom: "10px" }}>
                  Vladimir Gladyshev, a UK-based lawyer operating his own private legal practice, received a letter claiming that his VAT registration would be cancelled unless he verified his identity. The letter included a QR code, allegedly linking to an official government portal for identity verification.
                </p>
                <p className="text-gray-600">
                  Although the envelope resembled those typically used by HMRC (UK's tax payment and customs authority), several red flags raised Vladimir's suspicions:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• The absence of official logos</li>
                  <li>• Lack of personalisation (no mention of his name anywhere on the letter)</li>
                  <li>• Noticeable spelling and punctuation errors</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Correct Response</h3>
                <p className="text-gray-600" style={{ marginBottom: "20px" }}>
                  Do not scan the QR code. Verify the legitimacy of the letter by contacting the alleged company directly. While this situation was based in the UK, to report a QR code scam in Australia use the button below.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* australia post QR code */}
        <Card className="mb-16 border-gray-200 bg-white-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Australia Post QR Code Scam</span>
            </CardTitle>
            <CardDescription>Fake payment requests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">The Scenario</h3>
                <p className="text-gray-600" style={{ marginBottom: "10px" }}>
                  A scammer posed as a buyer contacts a seller on Facebook Marketplace, expressing interest in an item. They will ask for shipping of the item and send the seller a QR code allegedly containing the pre-paid shipping amount and instruct the seller that for them to 'receive payment' they will need to complete the form that the QR code redirects them to.                </p>
                <p className="text-gray-600">
                  However, instead the QR code will redirect the seller to a fake Australia Post website prompting the seller to input their personal and financial information to finalise payment, however in reality this is just a phishing operation disguised to gather their bank details.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Correct Response</h3>
                <p className="text-gray-600">
                  Red flags to notice:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600" style={{ marginBottom: "10px" }}>
                  <li>• Australia Post has publicly stated they do not offer prepayment via QR codes for Facebook Marketplace transactions</li>
                </ul>
                <p className="text-gray-600" style={{ marginBottom: "20px" }}>
                  Instead report the scam to both Australia Post and Scamwatch.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Notice Something Suspicious?
          <br />
            <span className="text-red-600">Report a potential scam below</span>
        </h3>
        <div className="flex items-center justify-center">
          <Link href="https://www.scamwatch.gov.au/report-a-scam" passHref>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Report a Scam
            </Button>
          </Link>
        </div>
        </section>

        {/* statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Alarming Statistics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-red-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-red-600 mb-2">587%</div>
                <p className="text-gray-600">Increase in QR code scams (2023)</p>
              </CardContent>
            </Card>
            <Card className="text-center border-orange-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">26%</div>
                <p className="text-gray-600">Of phishing scams use QR codes</p>
              </CardContent>
            </Card>
            <Card className="text-center border-yellow-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">36%</div>
                <p className="text-gray-600">Of QR code scams were identified and reported</p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">2%</div>
                <p className="text-gray-600">Of all scanned QR codes are malicious</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* prevention */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Now That You Know the Dangers</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Understanding the risks is the first step. Learn how to protect yourself and others from falling victim to these scams.
          </p>
          <Link href="/prevention">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Learn Prevention Strategies
              <Shield className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>

      {/* resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resources</h2>
        <Card className="mb-16 border-gray-200 bg-white-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Stay Informed</span>
            </CardTitle>
            <CardDescription>Protect yourself from QR code scams. Use these trusted links to read more information about QR code scams.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dangers of QR code scams (Real life examples)</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>
                    <a href="https://7news.com.au/news/new-australia-post-qr-code-scam-targets-buyers-on-facebook-marketplace-c-17415772"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      Australia Post QR code scam on Facebook Marketplace
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thetimes.com/business-money/money/article/first-phishing-now-quishing-dont-fall-for-fake-qr-codes-gl205kwbc"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      VAT QR Code Verification Letter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
              <h3 className="font-semibold text-gray-900 mb-2">QR code statistics</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                  <li>
                    <a href="https://qrcodesaustralia.com.au/australia-qr-code-statistics"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      Australia QR Code Statistics
                    </a>
                  </li>
                  <li>
                    <a href="https://www.qrcode-tiger.com/qr-code-phishing-statistics"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      Alarming QR Codes You Must Know in 2025
                    </a>
                  </li>
                  <li>
                    <a href="https://www.qrcodechimp.com/qr-code-statistics/"
                      target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
                      QR Code Statistics for 2025
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
