import React from 'react';
import { 
  ChatBubbleLeftRightIcon, 
  UserGroupIcon, 
  TrophyIcon,
  HeartIcon,
  ClockIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

interface CommunityFeature {
  title: string;
  description: string;
  icon: string;
  access: string;
}

interface TelegramInfo {
  title: string;
  description: string;
  benefits: readonly string[];
  joinProcess: string;
}

interface CommunityStats {
  members: string;
  dailyMessages: string;
  successStories: string;
  activeHours: string;
}

interface CommunityData {
  title: string;
  summary: string;
  description: string;
  features: readonly CommunityFeature[];
  telegramInfo: TelegramInfo;
  stats: CommunityStats;
}

interface CommunityProps {
  community: CommunityData;
}

export default function Community({
  community
}: CommunityProps) {
  const { title, summary, description, features, telegramInfo, stats } = community;
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'telegram':
        return ChatBubbleLeftRightIcon;
      case 'users':
        return UserGroupIcon;
      case 'partnership':
        return HeartIcon;
      case 'trophy':
        return TrophyIcon;
      default:
        return UsersIcon;
    }
  };

  return (
    <section aria-labelledby="community-title" className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="community-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {summary}
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.members}</div>
            <div className="text-sm text-gray-600">Aktive Mitglieder</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.dailyMessages}</div>
            <div className="text-sm text-gray-600">Nachrichten täglich</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{stats.successStories}</div>
            <div className="text-sm text-gray-600">Erfolgsgeschichten</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{stats.activeHours}</div>
            <div className="text-sm text-gray-600">Support täglich</div>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = getIcon(feature.icon);
            
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    <div className="text-blue-600 font-medium text-sm">{feature.access}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Telegram Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ChatBubbleLeftRightIcon className="w-8 h-8" />
                <h3 className="text-2xl md:text-3xl font-bold">{telegramInfo.title}</h3>
              </div>
              
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                {telegramInfo.description}
              </p>
              
              <p className="text-blue-100 text-sm leading-relaxed">
                {telegramInfo.joinProcess}
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Community-Vorteile:</h4>
              <ul className="space-y-3">
                {telegramInfo.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
