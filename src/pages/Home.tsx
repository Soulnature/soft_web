import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Achieve Your American Dream",
      subtitle: "Professional immigration law team providing comprehensive U.S. immigration and visa services",
      learnMore: "Learn More",
      contactUs: "Contact Us",
      features: [
        {
          title: 'Professional Team',
          description: 'Experienced immigration lawyers providing expert legal advice'
        },
        {
          title: 'Success Stories',
          description: 'Rich experience in successful cases ensuring smooth application process'
        },
        {
          title: 'One-Stop Service',
          description: 'Comprehensive care from assessment to completion'
        }
      ]
    },
    zh: {
      title: "实现您的美国梦想",
      subtitle: "专业的移民律师团队，为您提供一站式美国移民和签证服务",
      learnMore: "了解更多",
      contactUs: "联系我们",
      features: [
        {
          title: '专业团队',
          description: '经验丰富的移民律师团队，为您提供最专业的法律建议'
        },
        {
          title: '成功案例',
          description: '丰富的成功案例经验，确保您的申请顺利进行'
        },
        {
          title: '一站式服务',
          description: '从评估到申请完成，提供全程无忧的贴心服务'
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto text-white"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {currentContent.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {currentContent.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-x-4"
          >
            <a 
              href="/services"
              className="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              {currentContent.learnMore}
            </a>
            <a 
              href="/contact"
              className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              {currentContent.contactUs}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {currentContent.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;