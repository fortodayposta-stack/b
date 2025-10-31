import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Users, TrendingDown, Clock, Shield, Globe, Zap } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About KIVU Marketplace',
      subtitle: 'Empowering East Africa Through Smart Shopping',
      mission: 'Our Mission',
      missionText: 'KIVU Marketplace was founded with a simple yet powerful mission: to help every person in East Africa - from solo buyers to entrepreneurs - purchase quality products cheaper and faster through the power of group buying.',
      story: 'Our Story',
      storyText: 'Born in the heart of the Great Lakes region, KIVU takes its name from Lake Kivu, a symbol of connection and abundance shared among Rwanda, the Democratic Republic of Congo, and the wider East African community. Just as the lake connects communities, KIVU Marketplace connects buyers across borders, enabling them to access better prices through collective purchasing power.',
      vision: 'Our Vision',
      visionText: 'We envision a future where geographical boundaries don\'t limit access to quality products, where small businesses can compete with larger retailers, and where every purchase contributes to building a stronger, more connected East African economy.',
      values: 'Our Core Values',
      valuesList: [
        {
          title: 'Affordability',
          description: 'Making quality products accessible through group buying discounts of up to 30%',
          icon: TrendingDown,
        },
        {
          title: 'Community',
          description: 'Building connections between buyers and sellers across East Africa',
          icon: Users,
        },
        {
          title: 'Speed',
          description: 'Fast delivery across Rwanda, Tanzania, Uganda, Kenya, and Burundi',
          icon: Clock,
        },
        {
          title: 'Trust',
          description: 'Verified sellers, secure payments, and quality guarantees',
          icon: Shield,
        },
        {
          title: 'Innovation',
          description: 'Pioneering group buying technology to revolutionize e-commerce',
          icon: Zap,
        },
        {
          title: 'Regional Unity',
          description: 'Strengthening East African integration through commerce',
          icon: Globe,
        },
      ],
      impact: 'Our Impact',
      impactStats: [
        { number: '10,000+', label: 'Happy Customers' },
        { number: '45+', label: 'Product Categories' },
        { number: '5', label: 'Countries Served' },
        { number: '30%', label: 'Average Savings' },
      ],
      howItWorks: 'How Group Buying Works',
      steps: [
        { step: '1', title: 'Browse Products', description: 'Find products you love with both regular and pool prices displayed' },
        { step: '2', title: 'Join a Pool', description: 'Choose to join other buyers for a lower group price' },
        { step: '3', title: 'Wait for Pool to Fill', description: 'Track progress as more people join (e.g., 67/100 people)' },
        { step: '4', title: 'Receive Your Product', description: 'Once the pool fills, orders are processed and delivered' },
      ],
      whoWeServe: 'Who We Serve',
      audience: [
        {
          title: 'Individual Shoppers',
          description: 'Save money on electronics, fashion, home goods, and more',
        },
        {
          title: 'Small Businesses',
          description: 'Access wholesale prices without bulk order requirements',
        },
        {
          title: 'Entrepreneurs',
          description: 'Source products affordably to start or grow your business',
        },
        {
          title: 'Sellers',
          description: 'Reach customers across East Africa with our platform',
        },
      ],
    },
    rw: {
      title: 'Ibyerekeye KIVU Marketplace',
      subtitle: 'Gutera Inkunga Afurika y\'Iburasirazuba binyuze mu Kugura Cyubwenge',
      mission: 'Intego Yacu',
      missionText: 'KIVU Marketplace yashinzwe hamwe n\'intego yoroshye ariko ikomeye: gufasha umuntu wese muri Afurika y\'Iburasirazuba - kuva ku bagura benshi kugeza ku bacuruzi - kugura ibicuruzwa byujuja ubuziranenge ku giciro gito kandi byihuse binyuze mu gukora mu itsinda.',
      story: 'Inkuru Yacu',
      storyText: 'Yavutse mu mutwe w\'Akarere k\'Ibiyaga Binini, KIVU ifite izina ryayo ku Kiyaga cya KIVU, ikimenyetso cy\'ihuza n\'ubwinshi byasangiwe hagati ya Rwanda, Repubulika Iharanira Demokarasi ya Kongo, n\'umuryango w\'Afurika y\'Iburasirazuba. Nk\'uko ikiyaga gihuza abaturage, KIVU Marketplace ihuza abaguzi ku mipaka, ibafasha kubona ibiciro byiza binyuze mu gukoresha imbaraga zo kugura hamwe.',
      vision: 'Icyerekezo Cyacu',
      visionText: 'Turebera ejo hazaza imipaka y\'ubutaka idashobora kubangamira kubona ibicuruzwa byiza, aho ubucuruzi buto bushobora guhatana n\'abacuruzi banini, kandi aho kugura kwose bifasha kubaka ubukungu bukomeye, bwa Afurika y\'Iburasirazuba.',
      values: 'Indangagaciro Zacu Z\'ingenzi',
      valuesList: [
        { title: 'Kubona byoroshye', description: 'Gutuma ibicuruzwa byiza biboneka binyuze mu kugabanya igiciro cy\'itsinda kugeza kuri 30%', icon: TrendingDown },
        { title: 'Umuryango', description: 'Kubaka imikoranire hagati y\'abaguzi n\'abacuruzi muri Afurika y\'Iburasirazuba', icon: Users },
        { title: 'Umuvuduko', description: 'Kohereza byihuse mu Rwanda, Tanzaniya, Uganda, Kenya, na Burundi', icon: Clock },
        { title: 'Kwizera', description: 'Abacuruzi bemejwe, kwishyura gutekanijwe, n\'inkunga y\'ireme', icon: Shield },
        { title: 'Udushya', description: 'Gutangiza ikoranabuhanga ryo kugura mu itsinda kugira ngo twongere ubucuruzi bwa elegitoronike', icon: Zap },
        { title: 'Ubumwe bw\'Akarere', description: 'Gushimangira ubumwe bwa Afurika y\'Iburasirazuba binyuze mu bucuruzi', icon: Globe },
      ],
      impact: 'Ingaruka Zacu',
      impactStats: [
        { number: '10,000+', label: 'Abakiriya Bishimiye' },
        { number: '45+', label: 'Ibyiciro by\'Ibicuruzwa' },
        { number: '5', label: 'Ibihugu Byakiriwe' },
        { number: '30%', label: 'Ikiguzi Gikurikije' },
      ],
      howItWorks: 'Uko Gukora mu Tsinda Bikora',
      steps: [
        { step: '1', title: 'Shakisha Ibicuruzwa', description: 'Shakisha ibicuruzwa ukunda hamwe n\'ibiciro bisanzwe n\'iby\'itsinda byerekanwa' },
        { step: '2', title: 'Jya mu Tsinda', description: 'Hitamo kwinjira mu tsinda ry\'abandi baguzi kugira ngo ubone igiciro cyo hasi' },
        { step: '3', title: 'Tegereza Itsinda Kuzuzwa', description: 'Kurikirana iterambere nk\'uko abantu benshi binjira (urugero, 67/100 abantu)' },
        { step: '4', title: 'Akira Ibicuruzwa Byawe', description: 'Iyo itsinda rizuzuye, itumwa rikorwa kandi rikoherezwa' },
      ],
      whoWeServe: 'Abo Dukora',
      audience: [
        { title: 'Abaguzi ku giti cyabo', description: 'Kuzigama amafaranga ku bikorwa bya elegitoronike, imyambarire, ibikoresho byo mu rugo, n\'ibindi' },
        { title: 'Ubucuruzi Buto', description: 'Kubona ibiciro by\'ingurube nta bisabwa byo gutumiza byinshi' },
        { title: 'Abacuruzi', description: 'Shakisha ibicuruzwa ku giciro gito kugira ngo utangire cyangwa ukure ubucuruzi bwawe' },
        { title: 'Abacuruzi', description: 'Gera ku bakiriya muri Afurika y\'Iburasirazuba hamwe na sisitemu yacu' },
      ],
    },
    sw: {
      title: 'Kuhusu KIVU Marketplace',
      subtitle: 'Kuwezesha Afrika Mashariki Kupitia Ununuzi Mahiri',
      mission: 'Misheni Yetu',
      missionText: 'KIVU Marketplace ilianzishwa kwa misheni rahisi lakini yenye nguvu: kusaidia kila mtu katika Afrika Mashariki - kutoka kwa wanunuzi wa kibinafsi hadi wafanyabiashara - kununua bidhaa bora kwa bei nafuu na haraka zaidi kupitia nguvu ya ununuzi wa kikundi.',
      story: 'Hadithi Yetu',
      storyText: 'Kuzaliwa katika moyo wa Mkoa wa Maziwa Makuu, KIVU inachukua jina lake kutoka Ziwa Kivu, alama ya muunganisho na wingi unaoshirikiwa kati ya Rwanda, Jamhuri ya Kidemokrasia ya Kongo, na jumuiya pana ya Afrika Mashariki. Kama ziwa linavyounganisha jamii, KIVU Marketplace inaunganisha wanunuzi kupitia mipaka, kuwapa nafasi ya kupata bei bora kupitia nguvu ya ununuzi wa pamoja.',
      vision: 'Dira Yetu',
      visionText: 'Tunatazamia mustakabali ambapo mipaka ya kijiografia haitazuia ufikiaji wa bidhaa bora, ambapo biashara ndogo zinaweza kushindana na wauzaji wakubwa, na ambapo kila ununuzi unachangia kujenga uchumi wa Afrika Mashariki wenye nguvu zaidi na ulioungana.',
      values: 'Maadili Yetu Muhimu',
      valuesList: [
        { title: 'Bei Nafuu', description: 'Kufanya bidhaa bora zipatikane kupitia punguzo za ununuzi wa kikundi hadi 30%', icon: TrendingDown },
        { title: 'Jumuiya', description: 'Kujenga miunganisho kati ya wanunuzi na wauzaji katika Afrika Mashariki', icon: Users },
        { title: 'Kasi', description: 'Usafirishaji wa haraka katika Rwanda, Tanzania, Uganda, Kenya, na Burundi', icon: Clock },
        { title: 'Uaminifu', description: 'Wauzaji waliothibitishwa, malipo salama, na dhamana za ubora', icon: Shield },
        { title: 'Ubunifu', description: 'Kuanzisha teknolojia ya ununuzi wa kikundi ili kuleta mapinduzi katika biashara za mtandao', icon: Zap },
        { title: 'Umoja wa Kikanda', description: 'Kuimarisha muungano wa Afrika Mashariki kupitia biashara', icon: Globe },
      ],
      impact: 'Athari Yetu',
      impactStats: [
        { number: '10,000+', label: 'Wateja Wenye Furaha' },
        { number: '45+', label: 'Kategoria za Bidhaa' },
        { number: '5', label: 'Nchi Zilizohudumiwa' },
        { number: '30%', label: 'Wastani wa Akiba' },
      ],
      howItWorks: 'Jinsi Ununuzi wa Kikundi Unavyofanya Kazi',
      steps: [
        { step: '1', title: 'Vinjari Bidhaa', description: 'Pata bidhaa unazopenda zikionyesha bei za kawaida na za kikundi' },
        { step: '2', title: 'Jiunge na Kikundi', description: 'Chagua kujiunga na wanunuzi wengine kwa bei ya chini ya kikundi' },
        { step: '3', title: 'Subiri Kikundi Kijaze', description: 'Fuatilia maendeleo watu wengi wanapojiunga (mfano, 67/100 watu)' },
        { step: '4', title: 'Pokea Bidhaa Yako', description: 'Kikundi kikiisha kujaa, maagizo yanasindika na kusafirishwa' },
      ],
      whoWeServe: 'Tunawahudumia Nani',
      audience: [
        { title: 'Wanunuzi wa Kibinafsi', description: 'Okoa pesa kwenye elektroni, mitindo, bidhaa za nyumbani, na zaidi' },
        { title: 'Biashara Ndogo', description: 'Fikia bei za jumla bila mahitaji ya maagizo mengi' },
        { title: 'Wafanyabiashara', description: 'Pata bidhaa kwa bei nafuu ili kuanza au kukuza biashara yako' },
        { title: 'Wauzaji', description: 'Fikia wateja katika Afrika Mashariki na jukwaa letu' },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/19755751/pexels-photo-19755751.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-2xl text-white/90">{t.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">{t.mission}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t.missionText}</p>
        </section>

        {/* Story */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">{t.story}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t.storyText}</p>
        </section>

        {/* Impact Stats */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">{t.impact}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.impactStats.map((stat, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">{t.values}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.valuesList.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">{t.howItWorks}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.steps.map((step, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Who We Serve */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">{t.whoWeServe}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.audience.map((aud, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-blue-700">{aud.title}</h3>
                  <p className="text-gray-600">{aud.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">{t.vision}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t.visionText}</p>
        </section>
      </div>
    </div>
  );
};

export default About;
