
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };
  
  return (
    <Button 
      onClick={toggleLanguage} 
      variant="ghost" 
      size="sm" 
      className="px-3 flex items-center gap-2"
    >
      {t('language')}
    </Button>
  );
};

export default LanguageSwitcher;
