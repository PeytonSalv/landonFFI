'use client';

import { motion } from 'framer-motion';
import { CreditCard, MapPin, Clock, Shield, Zap, Star, TrendingUp, DollarSign, Users, Car, Handshake, Settings, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import AlabamaATMSchema from '@/components/AlabamaATMSchema';
import AnimatedCounter from '@/components/AnimatedCounter';

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 px-4 py-32 text-center min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/Hero.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Animated Background Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/30"
        ></motion.div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-3 h-3 bg-lime-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 w-1 h-1 bg-green-300 rounded-full opacity-70"
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="block"
            >
              Premium ATM
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400"
            >
              Solutions
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md"
          >
            Reliable, secure, and profitable ATM services for businesses of all sizes. 
            Increase foot traffic and generate passive income with our premium ATM solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact-form"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Get Started Today
            </motion.a>
            <motion.a
              href="#contact-form"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/80 transition-all duration-300 text-center backdrop-blur-sm"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 px-4 py-24"
        id="contact-form"
      >
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </motion.section>

      {/* Get FREE ATM Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 px-4 py-20 overflow-hidden"
      >
        {/* Floating background elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-10"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-16 h-16 bg-lime-300 rounded-full opacity-15"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-lg relative overflow-hidden"
            whileHover={{
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background gradient animation */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                background: [
                  "linear-gradient(45deg, #10b981, #84cc16)",
                  "linear-gradient(45deg, #84cc16, #eab308)",
                  "linear-gradient(45deg, #eab308, #10b981)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Get A <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    FREE ATM
                  </motion.span> For Your Business!
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-700 max-w-4xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  An ATM is the easiest and quickest way to boost your business and improve your cash sales. Studies show that by giving your customers access to cash, you increase customer flow by <strong><AnimatedCounter target={5} suffix="%" /></strong> while also allowing an increase in cash sales by <strong><AnimatedCounter target={20} suffix="%" /></strong>.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-700 max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Allow us to help improve your business by allowing customers access to cash when they need it.
                </motion.p>
              </motion.div>

              {/* Benefits Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="text-center p-8 bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl border border-green-100 cursor-pointer group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-100 to-lime-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div 
                    className="relative z-10 w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="w-8 h-8 text-green-700" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">
                    <AnimatedCounter target={5} suffix="%" /> More
                  </h3>
                  <p className="text-gray-700 relative z-10">Customer Flow</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="text-center p-8 bg-gradient-to-br from-lime-50 to-yellow-50 rounded-2xl border border-lime-100 cursor-pointer group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-lime-100 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div 
                    className="relative z-10 w-16 h-16 bg-lime-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TrendingUp className="w-8 h-8 text-lime-700" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">
                    <AnimatedCounter target={20} suffix="%" /> More
                  </h3>
                  <p className="text-gray-700 relative z-10">Cash Sales</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="text-center p-8 bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl border border-yellow-100 cursor-pointer group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div 
                    className="relative z-10 w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <DollarSign className="w-8 h-8 text-yellow-700" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">
                    <AnimatedCounter target={0} startFrom={3000} prefix="$" /> Cost
                  </h3>
                  <p className="text-gray-700 relative z-10">FREE Placement</p>
                </motion.div>
              </div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.p 
                  className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Not sure if an ATM is right for your business? Have questions about how they work or what options are available? Or maybe you&apos;re ready to get started? Fill out the form below to find out if a FREE ATM placement is the right fit for you!
                </motion.p>
                
                {/* Animated arrow pointing down */}
                <motion.div
                  className="flex justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center">
                    <motion.div
                      className="w-3 h-3 border-r-2 border-b-2 border-green-500 transform rotate-45"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
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
        className="relative z-10 px-4 py-20 overflow-hidden"
      >
        {/* Floating background elements */}
        <motion.div
          className="absolute top-10 left-20 w-32 h-32 bg-green-200 rounded-full opacity-10"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-lime-300 rounded-full opacity-15"
          animate={{
            y: [0, 35, 0],
            x: [0, -25, 0],
            rotate: [0, -360, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-6 py-2 bg-gradient-to-r from-green-100 to-lime-100 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-green-800 font-semibold text-sm uppercase tracking-wide">Industry Insights</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Who Owns ATMs And Where Do The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">
                Fees Go?
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              For many of our clients, this is the first question—and arguably the most important one.
            </p>
          </motion.div>

          {/* Main Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left Column - Problem Statement */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-200 shadow-lg h-full">
                                 <div className="flex items-start space-x-4 mb-6">
                   <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                     <CreditCard className="w-6 h-6 text-red-700" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-2">The Common Misconception</h3>
                     <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                   </div>
                 </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Many people believe that big banks own all the ATMs in the world, taking our hard-earned money and lining their pockets with it. They think banks are charging us fees for taking our money out of &quot;our bank.&quot;
                </p>
                <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                  <p className="text-red-800 font-medium">
                    While they&apos;re not entirely wrong, they&apos;re not entirely right either.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Reality */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-10 text-white h-full">
                                 <div className="flex items-start space-x-4 mb-6">
                   <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                     <Users className="w-6 h-6 text-green-100" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold mb-2">The Reality</h3>
                     <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-lime-400 rounded-full"></div>
                   </div>
                 </div>
                 <p className="text-green-100 text-lg leading-relaxed mb-6">
                   Many local business owners, like those at Ford Frontier Investments, own their ATMs and act as a bridge, connecting banks, credit card companies, businesses, and customers with convenient cash access.
                 </p>
                 <div className="p-4 bg-green-600/30 rounded-xl border border-green-500/20">
                   <p className="text-green-100 font-semibold">
                     <strong>Key Insight:</strong> This money doesn&apos;t belong to the banks—it belongs to the owner of the ATM.
                   </p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Surcharge Breakdown Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
              <div className="text-center mb-12">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-lime-100 to-yellow-100 rounded-full mb-6">
                  <span className="text-lime-800 font-semibold text-sm uppercase tracking-wide">Revenue Breakdown</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Understanding ATM Surcharges
                </h3>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  The &quot;Surcharge&quot; collected goes to the owner of the ATM, allowing them to pay for the machine while also gaining profit from the cash.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                 {[
                   {
                     icon: Settings,
                     title: 'Machine Costs',
                     description: 'Repayment of initial ATM investment',
                     bgColor: 'from-blue-50 to-cyan-50',
                     borderColor: 'border-blue-200',
                     iconBg: 'bg-blue-100',
                     iconColor: 'text-blue-700'
                   },
                   {
                     icon: Zap,
                     title: 'Maintenance',
                     description: 'Repairs and technical support',
                     bgColor: 'from-green-50 to-emerald-50',
                     borderColor: 'border-green-200',
                     iconBg: 'bg-green-100',
                     iconColor: 'text-green-700'
                   },
                   {
                     icon: CreditCard,
                     title: 'Processing',
                     description: 'Credit card processing fees',
                     bgColor: 'from-purple-50 to-pink-50',
                     borderColor: 'border-purple-200',
                     iconBg: 'bg-purple-100',
                     iconColor: 'text-purple-700'
                   },
                   {
                     icon: DollarSign,
                     title: 'ROI',
                     description: 'Return on cash investment',
                     bgColor: 'from-yellow-50 to-orange-50',
                     borderColor: 'border-yellow-200',
                     iconBg: 'bg-yellow-100',
                     iconColor: 'text-yellow-700'
                   }
                 ].map((item, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                     whileHover={{ 
                       scale: 1.05, 
                       y: -10,
                       boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                     }}
                     className={`bg-gradient-to-br ${item.bgColor} rounded-2xl p-6 border ${item.borderColor} cursor-pointer group relative overflow-hidden`}
                   >
                     <motion.div
                       className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     />
                     <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                       <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                     </div>
                     <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                     <p className="text-gray-700 text-sm">{item.description}</p>
                   </motion.div>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* Opportunity Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lime-400 to-green-600"></div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-lime-300 rounded-full opacity-20"></div>
                <div className="absolute bottom-10 left-20 w-24 h-24 bg-yellow-300 rounded-full opacity-15"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-block px-6 py-2 bg-green-500/30 rounded-full mb-6">
                  <span className="text-green-100 font-semibold text-sm uppercase tracking-wide">Your Opportunity</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Enter the ATM Business?
                </h3>
                <p className="text-xl text-green-100 mb-4 max-w-3xl mx-auto">
                  With the right training, this can be done by anyone. And with the right experience, it can be done quite well.
                </p>
                <p className="text-lg text-green-200 mb-8 max-w-2xl mx-auto">
                  That&apos;s where we come in—to help you succeed in the ATM business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-green-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Discover Your ATM Opportunity</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-green-300 text-green-100 font-semibold rounded-full hover:bg-green-500/20 transition-all duration-300"
                  >
                    Schedule Consultation
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Should I Buy an ATM Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="relative z-10 px-4 py-20 overflow-hidden"
      >
        {/* Floating background elements */}
                 <motion.div
           className="absolute top-20 right-20 w-28 h-28 bg-lime-200 rounded-full opacity-10"
           animate={{
             y: [0, -35, 0],
             x: [0, 25, 0],
             rotate: [0, 270, 0]
           }}
           transition={{
             duration: 18,
             repeat: Infinity,
             ease: "easeInOut"
           }}
         />
         <motion.div
           className="absolute bottom-32 left-16 w-20 h-20 bg-yellow-300 rounded-full opacity-15"
           animate={{
             y: [0, 30, 0],
             x: [0, -20, 0],
             rotate: [0, -270, 0]
           }}
           transition={{
             duration: 14,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 4
           }}
         />

        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
                         <motion.div
               className="inline-block px-6 py-2 bg-gradient-to-r from-green-100 to-lime-100 rounded-full mb-6"
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
             >
               <span className="text-green-800 font-semibold text-sm uppercase tracking-wide">Decision Guide</span>
             </motion.div>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
               Should I Buy An{' '}
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">
                 ATM?
               </span>
             </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Before answering this question, you must ask yourself if either you or your customers will benefit from ATM installation.
            </p>
          </motion.div>

          {/* Decision Framework */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">If the answer is NO</h3>
                  <p className="text-gray-700 text-lg">
                    You probably don&apos;t need an ATM. Focus on other business improvements that will directly benefit your customers.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">If the answer is YES</h3>
                  <p className="text-gray-700 text-lg">
                    Great! Now it&apos;s time to explore your options and make an informed decision about the best approach for your business.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Car Analogy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
                         <div className="bg-gradient-to-r from-yellow-50 via-lime-50 to-green-50 rounded-3xl p-8 md:p-12 border border-yellow-200 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-200 to-lime-200 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Car className="w-8 h-8 text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Think of it like buying a car
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      You don&apos;t just wake up one day, flip a coin, and write a check without knowing who you&apos;re buying from, what you&apos;re getting, or how much it costs.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">The Car Buying Process:</h4>
                    <div className="space-y-3">
                      {[
                        'Research car brands & models',
                        'Compare dealerships & pricing',
                        'Test drive different options',
                        'Choose what fits your needs',
                        'Make the purchase'
                      ].map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                            <span className="text-yellow-700 font-bold text-sm">{index + 1}</span>
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">The Same Logic Applies to ATMs</h4>
                    <p className="text-gray-700 mb-4">
                      Once you&apos;ve decided an ATM will benefit your business, it&apos;s time to look at your options and make an informed choice.
                    </p>
                    <div className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Smart decision-making process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Options Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your ATM Options
              </h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Just like car purchasing, you have multiple ways to get an ATM for your business
              </p>
            </div>

            {/* Car Options */}
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Car Purchase Options</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                 {[
                   {
                     icon: DollarSign,
                     title: 'Pay Cash',
                     description: 'Spend more upfront, but own the car and avoid interest',
                     benefit: 'Full ownership, no payments',
                     bgColor: 'from-green-50 to-lime-50',
                     borderColor: 'border-green-200',
                     iconBg: 'bg-green-100',
                     iconColor: 'text-green-700'
                   },
                   {
                     icon: CreditCard,
                     title: 'Financing',
                     description: 'Use someone else\'s money to purchase, paying back over time',
                     benefit: 'Lower upfront cost, monthly payments',
                     bgColor: 'from-lime-50 to-yellow-50',
                     borderColor: 'border-lime-200',
                     iconBg: 'bg-lime-100',
                     iconColor: 'text-lime-700'
                   },
                   {
                     icon: Clock,
                     title: 'Leasing',
                     description: 'Lower monthly payments for a period',
                     benefit: 'Fewer responsibilities, less ownership',
                     bgColor: 'from-yellow-50 to-green-50',
                     borderColor: 'border-yellow-200',
                     iconBg: 'bg-yellow-100',
                     iconColor: 'text-yellow-700'
                   }
                 ].map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`bg-gradient-to-br ${option.bgColor} rounded-2xl p-6 border ${option.borderColor} cursor-pointer relative overflow-hidden`}
                  >
                    <div className={`w-12 h-12 ${option.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <option.icon className={`w-6 h-6 ${option.iconColor}`} />
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h5>
                    <p className="text-gray-700 text-sm mb-3">{option.description}</p>
                    <div className="text-xs text-gray-600 bg-white/60 rounded-lg p-2">
                      {option.benefit}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ATM Options */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl opacity-30"></div>
              <div className="relative z-10 p-8 md:p-12">
                <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">ATM Placement Options</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                     {[
                     {
                       icon: Settings,
                       title: 'Own the ATM',
                       description: 'Buy the ATM yourself. You\'ll have full ownership but also responsibility for maintenance, restocking, compliance, and liabilities. We handle the processing for free.',
                       pros: ['Full control', 'Higher profits', 'Asset ownership', 'Free processing'],
                       cons: ['Higher upfront cost', 'Maintenance responsibility', 'Compliance burden'],
                       bgColor: 'from-green-600 to-green-700',
                       recommended: false
                     },
                     {
                       icon: Handshake,
                       title: 'ATM Partnership',
                       description: 'We buy the machine, handling maintenance, repairs, installation, and compliance. You simply stock with cash and get paid.',
                       pros: ['Lower upfront cost', 'Shared responsibilities', 'Still earn revenue'],
                       cons: ['Shared profits', 'Less control', 'Partner dependency'],
                       bgColor: 'from-lime-600 to-green-600',
                       recommended: true
                     },
                     {
                       icon: CheckCircle,
                       title: 'Hands-Free Placement',
                       description: 'Completely hands-free, ideal for high-volume locations. We install, maintain, fill, and operate the ATM. No hassle for you.',
                       pros: ['Zero responsibility', 'No upfront cost', 'Professional management'],
                       cons: ['Lower revenue share', 'No control', 'Location dependent'],
                       bgColor: 'from-yellow-600 to-lime-600',
                       recommended: false
                     }
                   ].map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`bg-gradient-to-br ${option.bgColor} rounded-2xl p-8 text-white relative overflow-hidden shadow-lg`}
                    >
                      {option.recommended && (
                        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                          RECOMMENDED
                        </div>
                      )}
                      
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <option.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h5 className="text-xl font-bold mb-4 text-center">{option.title}</h5>
                      <p className="text-white/90 text-sm mb-6 text-center">{option.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h6 className="font-semibold text-sm mb-2">Pros:</h6>
                          <ul className="space-y-1">
                            {option.pros.map((pro, i) => (
                              <li key={i} className="text-xs text-white/80 flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="font-semibold text-sm mb-2">Considerations:</h6>
                          <ul className="space-y-1">
                            {option.cons.map((con, i) => (
                              <li key={i} className="text-xs text-white/80 flex items-center space-x-2">
                                <span className="w-3 h-3 border border-white/40 rounded-full flex-shrink-0"></span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center"
          >
                         <div className="bg-gradient-to-r from-green-600 to-lime-600 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Make Your Decision?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss which option is best for your specific business needs and location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Personalized Recommendation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Compare All Options
                </motion.button>
              </div>
            </div>
          </motion.div>
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
                Want an ATM without the upfront cost but don&apos;t mind handling the cash? Partner with us—we&apos;ll purchase the machine, handle the setup, and deliver it to your door. All you need to do is fill it.
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
                With a commitment to exceptional service and customer satisfaction, we don&apos;t just provide solutions; we build lasting partnerships. Choose Ford Frontier Investments and experience the difference of having a team that genuinely cares about your success.
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

      {/* Final CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 px-4 py-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Boost Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join tons of satisfied business owners who&apos;ve increased their revenue with our ATM solutions.
            </p>
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center inline-block"
            >
              Get Started Today
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 border-t border-green-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
