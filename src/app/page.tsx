'use client';

import { motion } from 'framer-motion';
import { CreditCard, MapPin, Clock, Shield, Zap, Phone, Mail, Star, TrendingUp, DollarSign, Users, Car, Handshake, Settings, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import AlabamaATMSchema from '@/components/AlabamaATMSchema';

export default function Home() {
  return (
    <>
      <AlabamaATMSchema />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-yellow-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-normal filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-lime-200 rounded-full mix-blend-normal filter blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-normal filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 px-4 py-20 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Premium ATM
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Reliable, secure, and profitable ATM services for businesses of all sizes. 
            Increase foot traffic and generate passive income with our premium ATM solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Get Started Today
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-green-300 text-green-700 font-semibold rounded-full hover:bg-green-50 hover:border-green-400 transition-all duration-300 text-center"
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Get FREE ATM Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 px-4 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get A <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">FREE ATM</span> For Your Business!
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
                An ATM is the easiest and quickest way to boost your business and improve your cash sales. Studies show that by giving your customers access to cash, you increase customer flow by <strong>5%</strong> while also allowing an increase in cash sales by <strong>20%</strong>.
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Allow us to help improve your business by allowing customers access to cash when they need it.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl border border-green-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">5% More</h3>
                <p className="text-gray-700">Customer Flow</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6 bg-gradient-to-br from-lime-50 to-yellow-50 rounded-2xl border border-lime-100"
              >
                <div className="w-16 h-16 bg-lime-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-lime-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">20% More</h3>
                <p className="text-gray-700">Cash Sales</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-6 bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl border border-yellow-100"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-yellow-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$0 Cost</h3>
                <p className="text-gray-700">FREE Placement</p>
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-8">
                Not sure if an ATM is right for your business? Have questions about how they work or what options are available? Or maybe you&apos;re ready to get started? Fill out the form below to find out if a FREE ATM placement is the right fit for you!
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="relative z-10 px-4 py-20"
        id="contact-form"
      >
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 px-4 py-20" 
        id="services"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Why Choose Our ATM Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Advanced encryption and monitoring systems to protect every transaction",
                bgColor: "bg-green-100",
                iconColor: "text-green-700"
              },
              {
                icon: Zap,
                title: "Lightning Fast Setup",
                description: "Get your ATM installed and operational within 48 hours",
                bgColor: "bg-lime-100",
                iconColor: "text-lime-700"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance services",
                bgColor: "bg-green-100",
                iconColor: "text-green-700"
              },
              {
                icon: MapPin,
                title: "Prime Locations",
                description: "Strategic placement to maximize usage and revenue potential",
                bgColor: "bg-yellow-100",
                iconColor: "text-yellow-700"
              },
              {
                icon: CreditCard,
                title: "Revenue Sharing",
                description: "Competitive commission rates on every transaction",
                bgColor: "bg-lime-100",
                iconColor: "text-lime-700"
              },
              {
                icon: Star,
                title: "Premium Experience",
                description: "Modern, user-friendly interfaces that customers love",
                bgColor: "bg-green-100",
                iconColor: "text-green-700"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 border border-green-100 shadow-sm hover:shadow-md"
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who Owns ATMs Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 px-4 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who Owns ATMs And Where Do The Fees Go?
              </h2>
              <p className="text-xl text-gray-700">
                For many of our clients, this is the first question—and arguably the most important one.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Many people believe that big banks own all the ATMs in the world, taking our hard-earned money and lining their pockets with it. They think banks are charging us fees for taking our money out of &quot;our bank.&quot; While they&apos;re not entirely wrong, they&apos;re not entirely right either.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-8 my-8 border border-green-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  The Reality of ATM Ownership
                </h3>
                <p>
                  Many companies, like Ford Frontier Investments, buy ATMs and act as a sort of middleman, connecting banks, credit card companies, businesses, and customers with the cash held on their plastic cards.
                </p>
                <p className="mt-4">
                  <strong>But here&apos;s the key:</strong> This money doesn&apos;t belong to the banks—it belongs to the owner of the ATM. In certain cases that&apos;s the banks, but not always.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Understanding ATM Surcharges
              </h3>
              
              <p>
                That&apos;s where the fee comes into play. The &quot;Surcharge&quot; collected goes to the owner of the ATM, allowing them to pay for the machine while also gaining profit from the cash.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-gradient-to-br from-lime-50 to-yellow-50 rounded-xl p-6 border border-lime-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Surcharge fees cover:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Machine repayment costs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Repairs and maintenance (technology breaks)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Credit card processing fees</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Return on cash investment</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-xl p-6 text-white">
                  <h4 className="text-lg font-semibold mb-3">The Opportunity</h4>
                  <p className="text-green-100 mb-4">
                    With the right training, this can be done by anyone. And with the right experience, it can be done quite well.
                  </p>
                  <p className="text-green-100">
                    That's where we come in—to help you succeed in the ATM business.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-gray-700 mb-6">
                  Ready to learn more about ATM ownership opportunities?
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Discover Your ATM Opportunity
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Should I Buy an ATM Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="relative z-10 px-4 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Should I Buy An ATM?
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Before answering this question, you must ask yourself if either you or your customers will benefit from ATM installation. If the answer is no, you probably don't need one.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                If your answer is yes, there are other factors to consider.
              </p>

              <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl p-8 my-8 border border-yellow-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Think of it like buying a car
                    </h3>
                    <p>
                      You don't just wake up one day, flip a coin, and write a check without knowing who you're buying from, what you're getting, or how much it costs.
                    </p>
                    <p className="mt-4">
                      Before making such a large purchase, you think about it—researching car brands, dealerships, styles, pricing, and comparing the different models available. Only after you've chosen what is best for you, do you go make the purchase.
                    </p>
                    <p className="mt-4 font-semibold text-gray-800">
                      The same logic applies to buying an ATM, and once you have decided an ATM will benefit your business, it's time to look at your options.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ATM Placement Options For Business Owners
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  When buying a car, you have many options:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 border border-green-100">
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">Pay Cash</h5>
                    <p className="text-sm text-gray-700">Spend more upfront, but own the car and avoid interest. A larger investment, but no payments.</p>
                  </div>
                  <div className="bg-gradient-to-br from-lime-50 to-yellow-50 rounded-xl p-6 border border-lime-100">
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">Financing</h5>
                    <p className="text-sm text-gray-700">Use someone else's money to purchase, paying back over time with interest.</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6 border border-yellow-100">
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">Leasing</h5>
                    <p className="text-sm text-gray-700">Lower monthly payments for a period. Fewer ownership rights, but fewer responsibilities.</p>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                When choosing to get an ATM, you have similar options:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-green-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-8 h-8 text-green-700" />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-4 text-center">Own the ATM</h5>
                  <p className="text-gray-700 text-center">
                    Buy the ATM yourself. You'll have full ownership but also responsibility for maintenance, restocking, compliance, and liabilities.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 border border-lime-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-lime-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Handshake className="w-8 h-8 text-lime-700" />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-4 text-center">ATM Partnership</h5>
                  <p className="text-gray-700 text-center">
                    Someone else buys the machine, handling maintenance, repairs, installation, and compliance. You simply stock with cash and get paid.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl p-8 border border-yellow-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-yellow-700" />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-4 text-center">Hands-Free Placement</h5>
                  <p className="text-gray-700 text-center">
                    Completely hands-free, ideal for high-volume locations. We install, maintain, fill, and operate the ATM. No hassle for you.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 px-4 py-20"
        id="our-services"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the service that best fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-700">ATM</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free ATM Placement</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Does your business need an ATM but not the hassle or expense of owning one? Let us handle it all—from purchasing and setup to installation and maintenance—so you can focus entirely on growing your business.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg transition-all duration-300 text-center inline-block"
              >
                Learn More
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-lime-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-lime-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-10 h-10 text-lime-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Processing</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Frustrated with high credit card fees or an outdated system? Allow us to create a tailored payment processing solution that keeps more of your hard-earned money where it belongs—in your pocket.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-lime-600 to-green-600 text-white font-semibold rounded-lg transition-all duration-300 text-center inline-block"
              >
                Get Quote
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-10 h-10 text-yellow-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ATM Partnership</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Want an ATM without the upfront cost but don't mind handling the cash? Partner with us—we'll purchase the machine, handle the setup, and deliver it to your door. All you need to do is fill it.
              </p>
              <motion.a
                href="/partnership"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-lime-600 text-white font-semibold rounded-lg transition-all duration-300 text-center inline-block"
              >
                Partner With Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="relative z-10 px-4 py-20"
        id="about"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-6">
                About Ford Frontier Investments
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-green-100 space-y-6">
              <p className="text-lg leading-relaxed">
                At Ford Frontier Investments, we are dedicated to driving your business growth by maximizing cash flow and operational efficiency. We understand that every dollar matters, which is why we work tirelessly to ensure you get the most out of what you pay for.
              </p>
              <p className="text-lg leading-relaxed">
                Our tailored solutions are designed to reduce unnecessary expenses and streamline your operations, giving you the freedom to focus on what truly matters—growing your business.
              </p>
              <p className="text-lg leading-relaxed">
                With a commitment to exceptional service and customer satisfaction, we don't just provide solutions; we build lasting partnerships. Choose Ford Frontier Investments and experience the difference of having a team that genuinely cares about your success.
              </p>
            </div>
            <div className="text-center mt-12">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-green-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center inline-block"
              >
                Start Your Partnership Today
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 px-4 py-20"
        id="contact"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Boost Your Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join hundreds of satisfied business owners who've increased their revenue with our ATM solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Mail className="w-5 h-5" />
                <span>info@fordfrontier.com</span>
              </div>
            </div>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center inline-block"
            >
              Schedule Free Consultation
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 border-t border-green-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
            © 2024 Ford Frontier Investments. All rights reserved. | Licensed & Insured ATM Provider
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
