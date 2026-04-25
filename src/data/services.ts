export interface ServiceDetail {
  slugCs: string;
  slugEn: string;
  icon: string;
  imageAlt: string;
  benefitsCs: string[];
  benefitsEn: string[];
  faqCs: { q: string; a: string }[];
  faqEn: { q: string; a: string }[];
  minCapacity: number;
  maxCapacity: number;
}

export const servicesDetail: ServiceDetail[] = [
  {
    slugCs: 'skolni-vylety',
    slugEn: 'school-trips',
    icon: 'graduation-cap',
    imageAlt: 'Školní výlet autobusem',
    benefitsCs: [
      'Bezpečnostní pásy na každém místě',
      'Zkušení řidiči s praxí v přepravě dětí',
      'Přesné dodržení jízdního řádu',
      'Pojištění pasažérů',
      'Klimatizace a USB nabíjení',
      'Spolupráce s pojišťovnami a úřady',
    ],
    benefitsEn: [
      'Safety belts at every seat',
      'Experienced drivers for child transport',
      'Punctual schedule adherence',
      'Passenger insurance',
      'Air conditioning and USB charging',
      'Coordination with insurance and authorities',
    ],
    faqCs: [
      {
        q: 'Jak daleko dopředu musím objednat autobus na školní výlet?',
        a: 'Doporučujeme objednávat alespoň 2–4 týdny předem, zvláště v sezóně (jaro, podzim). Kapacita busů je omezená.',
      },
      {
        q: 'Mohu si vyžádat osvědčení o způsobilosti řidiče?',
        a: 'Ano, všichni naši řidiči mají platné průkazy způsobilosti a jsme schopni poskytnout veškerou dokumentaci.',
      },
      {
        q: 'Jezdíte i na zahraniční výlety se školou?',
        a: 'Ano, organizujeme výjezdy do celé Evropy. Řidiči mají mezinárodní zkušenosti a znalost tras.',
      },
    ],
    faqEn: [
      {
        q: 'How far in advance should I book a coach for a school trip?',
        a: 'We recommend booking at least 2–4 weeks in advance, especially during peak season (spring, autumn).',
      },
      {
        q: 'Can I request the driver\'s qualification certificate?',
        a: 'Yes, all our drivers have valid qualification certificates and we can provide all documentation.',
      },
      {
        q: 'Do you organise international school trips?',
        a: 'Yes, we travel throughout Europe. Our drivers have international experience and route knowledge.',
      },
    ],
    minCapacity: 19,
    maxCapacity: 55,
  },
  {
    slugCs: 'firemni-doprava',
    slugEn: 'corporate-transport',
    icon: 'briefcase',
    imageAlt: 'Firemní doprava autobusem',
    benefitsCs: [
      'Fakturace na firmu (IČO, DIČ)',
      'Reprezentativní moderní vozy',
      'WiFi pro produktivní cestu',
      'Přesné dodržení časového harmonogramu',
      'Diskrétnost a profesionalita',
      'Možnost rámcové smlouvy',
    ],
    benefitsEn: [
      'Corporate invoicing available',
      'Representative modern vehicles',
      'WiFi for productive travel',
      'Strict schedule adherence',
      'Discretion and professionalism',
      'Framework contract available',
    ],
    faqCs: [
      {
        q: 'Vystavujete faktury na firemní IČO?',
        a: 'Ano, samozřejmě. Fakturujeme na IČO/DIČ dle požadavků vaší společnosti.',
      },
      {
        q: 'Zajistíte přepravu pro opakující se firemní akce?',
        a: 'Ano, nabízíme rámcové smlouvy a pravidelnou spolupráci s výhodnějšími podmínkami.',
      },
    ],
    faqEn: [
      {
        q: 'Do you issue invoices to company VAT numbers?',
        a: 'Yes, absolutely. We invoice to company registration and VAT numbers as required.',
      },
      {
        q: 'Can you handle recurring corporate events?',
        a: 'Yes, we offer framework contracts and regular cooperation with better terms.',
      },
    ],
    minCapacity: 19,
    maxCapacity: 55,
  },
  {
    slugCs: 'svatby',
    slugEn: 'weddings',
    icon: 'heart',
    imageAlt: 'Svatební převozy autobusem',
    benefitsCs: [
      'Diskrétní a elegantní přístup',
      'Přizpůsobení jízdního řádu průběhu svatby',
      'Čistý a reprezentativní vůz',
      'Spolehlivost i v pozdních nočních hodinách',
      'Pomoc s plánováním tras',
      'Zkušenosti s převozy hostů na oslavách',
    ],
    benefitsEn: [
      'Discreet and elegant approach',
      'Schedule adapted to the wedding programme',
      'Clean and representative vehicle',
      'Reliability even late at night',
      'Route planning assistance',
      'Experience with event guest transport',
    ],
    faqCs: [
      {
        q: 'Jezdíte i v noci pro rozvoz hostů?',
        a: 'Ano, přizpůsobíme se průběhu vaší slavnosti. Noční jízdy jsou standardní součástí svatebních přeprav.',
      },
      {
        q: 'Jak velký autobus pro svatbu potřebuji?',
        a: 'Záleží na počtu hostů. Máme vozidla od 19 do 55 míst — rádi poradíme s výběrem.',
      },
    ],
    faqEn: [
      {
        q: 'Do you operate late-night guest shuttles?',
        a: 'Yes, we adapt to your event\'s schedule. Late-night runs are a standard part of wedding transport.',
      },
      {
        q: 'What size coach do I need for a wedding?',
        a: 'It depends on your guest count. We have vehicles from 19 to 55 seats — we\'ll help you choose.',
      },
    ],
    minCapacity: 19,
    maxCapacity: 55,
  },
  {
    slugCs: 'mezinarodni-doprava',
    slugEn: 'international',
    icon: 'plane',
    imageAlt: 'Mezinárodní autobusová doprava',
    benefitsCs: [
      'Řidiči se zkušenostmi v zahraničí',
      'Vybavené busy na dlouhé trasy (WC, TV, lednice)',
      'Znalost předpisů v EU zemích',
      'Připraveni na hranice i celní kontroly',
      'Pojištění pro mezinárodní přepravu',
      'Flexibilní trasy dle vašich potřeb',
    ],
    benefitsEn: [
      'Drivers experienced in international routes',
      'Long-distance equipped coaches (WC, TV, fridge)',
      'Knowledge of EU country regulations',
      'Ready for border and customs controls',
      'International transport insurance',
      'Flexible routes tailored to your needs',
    ],
    faqCs: [
      {
        q: 'Do jakých zemí jezdíte?',
        a: 'Jezdíme do celé Evropy — Německo, Rakousko, Itálie, Španělsko, Francie a další. Kontaktujte nás s vaší trasou.',
      },
      {
        q: 'Má autobus WC pro dlouhé trasy?',
        a: 'Ano, pro mezinárodní zájezdy využíváme vozidla vybavená toaletou, TV a lednicí.',
      },
    ],
    faqEn: [
      {
        q: 'Which countries do you travel to?',
        a: 'We travel throughout Europe — Germany, Austria, Italy, Spain, France and more. Contact us with your route.',
      },
      {
        q: 'Does the coach have a toilet for long distances?',
        a: 'Yes, for international tours we use vehicles equipped with a toilet, TV and fridge.',
      },
    ],
    minCapacity: 35,
    maxCapacity: 55,
  },
];
