import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export const locales = {
  root: {
    label: 'English',
    lang: 'en',
  },
};
const site = 'https://wiki.gnoppix.org/';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    react(),
    starlight({
      lastUpdated: true,
      customCss: ['./src/tailwind.css'],
      title: 'Gnoppix Linux',
      logo: {
        src: '/src/assets/logo.svg',
      },
      editLink: {
        baseUrl: 'https://github.com/gnoppix/wiki-pages/edit/next/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/gnoppix',
        },
        {
          icon: 'twitter',
          label: 'Twitter',
          href: 'https://x.com/gnoppixlinux',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.com/invite/tmHjQmgBW9',
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: site + 'og.jpg?v=1',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content: site + 'og.jpg?v=1',
          },
        },
      ],
      locales,
      sidebar: [
        {
          label: 'Getting Started',
          translations: {
            ru: 'Начало работы',
            sk: 'Začíname',
            cs: 'Začínáme',
          },
          items: [
            {
              label: 'Why Gnoppix?',
              translations: {
                ru: 'Почему Gnoppix?',
                sk: 'Prečo Gnoppix?',
                cs: 'Proč Gnoppix?',
              },
              link: 'gnoppix_basic/why_gnoppix',
            },
            {
              label: 'Downloading Gnoppix',
              translations: {
                ru: 'Загрузка Gnoppix',
                sk: 'Sťahovanie Gnoppix',
                cs: 'Stažení Gnoppix',
              },
              link: 'gnoppix_basic/download',
            },
            {
              label: 'Current Desktop Versions',
              link: 'gnoppix_basic/versions',
            },
            {
              label: 'FAQ',
              link: 'gnoppix_basic/faq',
            },
          ],
        },
        {
          label: 'Installation',
          translations: {
            ru: 'Установка',
            sk: 'Inštalácia',
            cs: 'Instalace',
          },
          items: [
            {
              label: 'Requirements & Preinstall Setup',
              translations: {
                ru: 'Требования и подготовка к установке',
                sk: 'Požiadavky Gnoppix a inštalačné médium',
                cs: 'Požadavky Gnoppix a předinstalační příprava',
              },
              link: 'installation/installation_prepare',
            },

            {
              label: 'How to install Gnoppix',
              link: 'installation/install',
            },

            {
              label: 'Boot Managers',
              translations: {
                ru: 'Boot менеджер',
                sk: 'Boot manažéry',
                cs: 'Správci zavádění',
              },
              link: 'installation/boot_managers',
            },
            {
              label: 'Filesystem',
              translations: {
                ru: 'Файловая система',
                sk: 'Súborový systém',
                cs: 'Souborový systém',
              },
              link: 'installation/filesystem',
            },

            {
              label: 'Repoitories',
              link: 'installation/repo',
            },

            {
              label: 'Screenshots',
              translations: {
                ru: 'Скриншоты',
                sk: 'Snímky obrazovky',
                cs: 'Snímky obrazovky',
              },
              link: 'installation/screenshots',
            },
            {
              label: 'Desktop Environments',
              translations: {
                ru: 'Окружения рабочего стола',
                sk: 'Desktopové prostredia',
                cs: 'Desktop prostředí',
              },
              link: 'installation/desktop_environments',
            },
            {
              label: 'Installation on Root',
              translations: {
                ru: 'Установка на корневой раздел',
                sk: 'Inštalácia Root',
                cs: 'Instalace na kořenový oddíl',
              },
              link: 'installation/installation_on_root',
            },
            {
              label: 'Installation T2 MacBook',
              translations: {
                ru: 'Установка на T2 MacBook',
                sk: 'Inštalácia na T2 MacBook',
                cs: 'Instalace na MacBook T2',
              },
              link: 'installation/installation_t2macbook',
            },
          ],
        },


        {
          label: 'Gnoppix community',
          translations: {
            de: 'Gnoppix Community',
            en: 'Gnoppix Community',
          },
          items: [
            {
              label: 'Gnoppix AI Packages',
              link: 'community/gnoppix-ai',
            },

            {
              label: 'Gnoppix Member',
              link: 'community/gnoppix',
            },


            {
              label: 'Join as a Member',
              link: 'community/join',
            },


            {
              label: 'System updates',
              link: 'community/update',
            },


            {
              label: 'K-ubuntu',
              link: 'community/kubuntu',
            },



            {
              label: 'AI Legal issues?',
              link: 'community/cp',
            },


            {
              label: 'Gnoppix API',
              link: 'community/api',
            },


            {
              label: 'Closed vs. OpenSource AI',
              link: 'community/oss',
            },



            {
              label: 'AI Requirements',
              link: 'community/requirements',
            },


            {
              label: 'Why we left EU',
              link: 'community/eu',
            },




            {
              label: 'Producthaftung',
              link: 'community/haftung',
            },




            {
              label: 'Stable Diffusion',
              link: 'community/sd',
            },





            {
              label: 'AI Email',
              link: 'community/email',
            },




            {
              label: 'Copilot',
              link: 'community/pilot',
            },



            {
              label: 'AI Web optimizer',
              link: 'features/web',
            },


            {
              label: 'AI WordPressing',
              link: 'community/word',
            },



            {
              label: 'Gnoppix Agents',
              link: 'community/agent',
            },


            {
              label: 'Gnoppix AI Framework',
              link: 'community/agent',
            },









	    ],
         },  


        {
          label: 'Gnoppix Features',
          translations: {
            ru: 'Возможности Gnoppix',
            cs: 'Funkce Gnoppix',
            sk: 'Funkcie Gnoppix',
          },
          items: [
            {
              label: 'Anonymous Online',
              link: 'features/vpn',
            },

            {
              label: 'Anonymous traffic over tor CLI',
              link: 'features/tor',
            },

            {
              label: 'Anonymous traffic over tor GUI',
              link: 'features/tor-gui',
            },

            {
              label: 'DNS over https (DOH)',
              link: 'features/doh',
            },

            {
              label: 'AI ',
              link: 'features/ai',
            },

            {
              label: 'AI Quickstart ',
              link: 'support/quickstart',
            },

            {
              label: 'AI Models',
              link: 'features/ai-models',
            },

            {
              label: 'AI Models pricing',
              link: 'features/ai-models-price',
            },

            {
              label: 'AI Copilot ',
              link: 'features/copilot',
            },

            {
              label: 'AI buy credits',
              link: 'features/ai-token',
            },

            {
              label: 'AI - FAQ',
              link: 'features/ai-faq',
            },

            {
              label: 'AI API',
              link: 'features/ai-api',
            },

            {
              label: 'AI API endpoints',
              link: 'features/ai-api-endpoints',
            },

            {
              label: 'AI Vulnerability Scanning',
              link: 'features/aivs',
            },

            {
              label: 'AI Searching',
              link: 'features/aivs',
            },
            {
              label: 'Gnoppix VPN',
              link: 'features/vpn',
            },

            {
              label: 'Maximum confidentiality',
              link: 'features/ai',
            },

            {
              label: 'Anonymous search',
              link: 'features/gnoppix_search',
            },

            {
              label: 'Pastebin enhanced',
              link: 'features/pastebin',
            },

            {
              label: 'DevTools online',
              link: 'features/devtools',
            },

            {
              label: 'Time Server',
              link: 'features/time',
            },

            {
              label: 'I2P Router Menu',
              link: 'features/i2p',
            },

            {
              label: 'VeraCrypt ',
              link: 'features/vera',
            },

            {
              label: 'Password Manager',
              link: 'features/pass',
            },

            {
              label: 'Malware/RootKit Scanner',
              link: 'features/root',
            },

            {
              label: 'Disk Wiper',
              link: 'features/diskwiper',
            },

            {
              label: 'MetaData cleaner',
              link: 'features/meta',
            },

            {
              label: 'Hardenend WebBroser',
              link: 'features/web',
            },

            {
              label: 'Working AD Blocker',
              link: 'features/add',
            },

            {
              label: 'RAM Wiper',
              link: 'features/ram',
            },

            {
              label: 'Wizard of OZ',
              link: 'features/thecleaner',
            },

            {
              label: 'Network Security Toolkit',
              link: 'features/network',
            },

            {
              label: 'Gnoppix internal Firewall',
              link: 'features/firewall',
            },

            {
              label: 'Big Red Button',
              link: 'features/brb',
            },

            {
              label: 'Security Audit',
              link: 'features/audit',
            },

            {
              label: 'Working AD Blocker',
              link: 'features/add',
            },

            {
              label: 'Hardware Detection (chwd)',
              link: 'features/chwd',
              translations: {
                cs: 'Detekce hardwaru Gnoppix (chwd)',
                sk: 'Detekcia hardvéru Gnoppix (chwd)',
              },
            },
            {
              label: 'Optimzied Kernel',
              translations: {
                ru: 'Ядро',
                cs: 'Jádro',
                sk: 'Jadro',
              },
              link: 'features/kernel',
            },
            {
              label: 'Kernel Manager',
              translations: {
                ru: 'Менеджер ядер',
                sk: 'Správca jadra',
                cs: 'Správce jader',
              },
              link: 'features/kernel_manager',
            },
            {
              label: 'Gnoppix Settings',
              translations: {
                ru: 'Настройки Gnoppix',
                cs: 'Nastavení Gnoppix',
                sk: 'Nastavenia Gnoppix',
              },
              link: 'features/gnoppix_settings',
            },

            {
              label: 'Linux Gaming',
              link: 'features/gaming',
            },

            {
              label: 'Security and Privacy',
              link: 'features/privacy',
            },
          ],
        },
        {
          label: 'Configuration',
          translations: {
            ru: 'Конфигурация',
            sk: 'Konfigurácia',
            cs: 'Nastavení',
          },
          items: [
            {
              label: 'AI Quickstart',
              link: 'configuration/quickstart',
            },

            {
              label: 'Secure Boot Setup',
              translations: {
                ru: 'Настройка Secure Boot',
                cs: 'Nastavení zabezpečeného spouštění',
                sk: 'Nastavenie zabezpečeného spúšťania',
              },
              link: 'configuration/secure_boot_setup',
            },
            {
              label: 'Post Install Setup',
              translations: {
                ru: 'Настройка после установки',
                sk: 'Nastavenie po inštalácii',
                cs: 'Nastavení po instalaci',
              },
              link: 'configuration/post_install_setup',
            },
            {
              label: 'Boot Manager Configuration',
              translations: {
                ru: 'Конфигурация Boot менеджера',
                sk: 'Konfigurácia Boot manažéra',
                cs: 'Konfigurace správce spouštění',
              },
              link: 'configuration/boot_manager_configuration',
            },
            {
              label: 'Dual GPU Laptops',
              translations: {
                ru: 'Ноутбуки с двумя GPU',
                sk: 'Dvojité GPU notebooky',
                cs: 'Notebooky s dvojitou GPU',
              },
              link: 'configuration/dual_gpu',
            },
            {
              label: 'Gaming',
              link: 'configuration/gaming',
              translations: {
                cs: 'Hraní her',
                sk: 'Hranie hier',
              },
            },
            {
              label: 'General System Tweaks',
              translations: {
                ru: 'Общие настройки системы',
                sk: 'Všeobecné systémové úpravy',
                cs: 'Obecné úpravy systému',
              },
              link: 'configuration/general_system_tweaks',
            },
            {
              label: 'sched-ext Tutorial',
              translations: {
                ru: 'Руководство по sched-ext',
                sk: 'sched-ext návod',
                cs: 'sched-ext Tutoriál',
              },
              link: 'configuration/sched-ext',
            },
            {
              label: 'NVIDIA Wayland Overclocking',
              translations: {
                ru: 'Разгон NVIDIA на Wayland',
                cs: 'Přetaktování NVIDIA na Waylandu',
                sk: 'Pretaktovanie NVIDIA na Waylande',
              },
              link: 'configuration/nvidia-wayland-overclock',
            },
            {
              label: 'Automounting Additional Drives',
              translations: {
                ru: 'Автоматическое монтирование дополнительных дисков',
                cs: 'Automatické připojování dalších disků',
                sk: 'Automatické pripájanie ďalších diskov',
              },
              link: 'configuration/automount_with_fstab',
            },

            {
              label: 'More Guides and Help',
              link: 'configuration/more',
            },
          ],
        },
        {
          label: 'Desktop Environments',
          translations: {
            ru: 'Окружения рабочего стола',
            cs: 'Desktopová prostředí',
            sk: 'Desktopové prostredia',
          },
          items: [
            {
              label: 'i3',
              link: 'desktop_environments/i3',
            },
            {
              label: 'Hyprland',
              link: 'desktop_environments/hyprland',
            },
            {
              label: 'Qtile',
              link: 'desktop_environments/qtile',
            },
            {
              label: 'KDE Plasma',
              link: 'desktop_environments/kde',
            },
          ],
        },




{
  // The label 'Developement' has been corrected to 'Development' to match the directory name.
  label: 'Development',
  items: [
    {
      label: 'OSS AI Framework',
      // Corrected the link path spelling from 'developemnt' to 'development'.
      link: 'development/framework',
    },
    {
      label: 'OSS AI Web Chat Agent',
      // Corrected the link path spelling from 'developement' to 'development'.
      link: 'development/chat',
    },
    {
      label: 'OSS AI HR Agent',
      // Corrected the link path spelling from 'developement' to 'development'.
      link: 'development/hr',
    },
    {
      label: 'OSS AI Webscraper',
      link: 'development/web',
    },
  ],
},




        {
          label: 'Support',
          translations: {
            ru: 'Поддержка',
            sk: 'Podpora',
            cs: 'Podpora',
          },
          items: [
            {
              label: 'FAQ',
              translations: {
                cs: 'Často kladené otázky',
                sk: 'Najčastejšie kladené otázky',
              },
              link: 'support/faq',
            },
            {
              label: 'Submitting Bugs',
              translations: {
                ru: 'Отправка сообщений об ошибках',
                sk: 'Odoslanie chýb',
                cs: 'Nahlášení chyb',
              },
              link: 'support/submitting_bugs',
            },
            {
              label: 'Submitting Package Requests',
              translations: {
                ru: 'Запросы на добавление пакетов',
                sk: 'Odoslanie požiadaviek na balíčky',
                cs: 'Žádosti o balíčky',
              },
              link: 'support/submitting_package_requests',
            },
            {
              label: 'Social',
              translations: {
                ru: 'Социальные сети',
                sk: 'Sociálne siete',
                cs: 'Sociální sítě',
              },
              link: 'support/social',
            },
          ],
        },
        {
          label: 'Changelogs',
          translations: {
            sk: 'Zmenové logy',
            cs: 'Změny',
          },
          items: [
            {
              label: 'GUI Installer and ISO',
              translations: {
                ru: 'GUI установщик и ISO',
                sk: 'GUI Inštalátor a ISO',
                cs: 'Grafický instalátor a ISO',
              },
              link: 'changelogs/gui_installer',
            },
            {
              label: 'CLI Installer',
              translations: {
                ru: 'CLI установщик',
                sk: 'CLI Inštalátor',
                cs: 'Příkazový řádek instalátoru',
              },
              link: 'changelogs/cli_installer',
            },
          ],
        },
        {
          label: 'Policy',
          translations: {
            ru: 'Политика',
            sk: 'Politika',
            cs: 'Podmínky',
          },
          items: [
            {
              label: 'Community Rules',
              translations: {
                ru: 'Правила сообщества',
                id: 'Peraturan Komunitas',
                sk: 'Pravidlá komunity',
                cs: 'Pravidla komunity',
              },
              link: 'policy/community-rules',
            },
            {
              label: 'Code of Conduct',
              translations: {
                sk: 'Kódex správania',
                cs: 'Kodex chování',
              },
              link: 'policy/code_of_conduct',
            },
            {
              label: 'Terms of Service',
              translations: {
                ru: 'Условия обслуживания',
                sk: 'Podmienky služby',
                cs: 'Obchodní podmínky',
              },
              link: 'policy/terms_of_service',
            },
            {
              label: 'Privacy Policy',
              translations: {
                ru: 'Политика конфиденциальности',
                sk: 'Zásady ochrany osobných údajov',
                cs: 'Zásady ochrany osobních údajů',
              },
              link: 'policy/privacy_policy',
            },
            {
              label: 'Repository Policy',
              translations: {
                ru: 'Политика репозитория',
                sk: 'Politika repozitárov',
                cs: 'Repozitářní politika',
              },
              link: 'policy/repository_policy',
            },

            {
              label: 'Ai - API Policy',
              link: 'policy/ai_terms_of_service',
            },

            {
              label: 'Donation',
              translations: {
                ru: 'Пожертвования',
                sk: 'Darcovstvo',
                cs: 'Dobrovolné příspěvky',
              },
              link: 'policy/donation',
            },

            {
              label: 'Credits & Supporters',
              link: 'policy/credits',
            },

            {
              label: 'Licence',
              link: 'policy/licence',
            },
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
