import { Business } from "./interfaces/business";
import { CurrencyType } from "./interfaces/currencyType";
import { InvestmentOffer } from "./interfaces/investmentOffer";
import { InvestmentOperation } from "./interfaces/investmentOperation";
import { InvestmentType } from "./interfaces/investmentType";
import { Investor } from "./interfaces/investor";
import { TransactionOperation } from "./interfaces/transactionOperation";
import { User } from "./interfaces/user";

export let userLastId: number = 8;
export let investorLastId: number = 3;
export let businessLastId: number = 5;
export let investmentOfferLastId: number = 5;
export let investmentOperationLastId: number = 0;
export let transactionOperationLastId: number = 0;
export let highestFinancingTarget: number[] = [1, 100000];

export var INVESTORS: Investor[] = [
    {
        id: 1, names: 'Fabricio', surnames: 'Sotelo Parra', dob: '2000-04-25', docType: 'DNI',
        docNumber: '70778330', money: 0.00
    },
    {
        id: 2, names: 'Diego Rolando', surnames: 'Espinoza Morales', dob: '1995-08-17', docType: 'DNI',
        docNumber: '70774561', money: 0.00
    },
    {
        id: 3, names: 'Leonardo', surnames: 'Raymondi Perales', dob: '1990-01-28', docType: 'DNI',
        docNumber: '70788484', money: 0.00
    }
];
export var BUSINESSES: Business[] = [
    {
        id: 1, representativeNames: 'Juan', representativeSurnames: 'Perez Ugarte', 
        businessName: 'El Gran Sanguchón E.I.R.L.', businessTradeName: 'El Gran Sanguchón',
        businessRuc: '12512514578',
    },
    {
        id: 2, representativeNames: 'Diego', representativeSurnames: 'Díaz Fernández',
        businessName: 'Laboratorio Jesús S.A.C.', businessTradeName: 'Laboratorio Jesús',
        businessRuc: '12512514578',
    },
    {
        id: 3, representativeNames: 'Carlos', representativeSurnames: 'Montoya Soto',
        businessName: 'El Buen Porte E.I.R.L.', businessTradeName: 'El Buen Porte', businessRuc: '12512514578'
    },
    {
        id: 4, representativeNames: 'Manuel', representativeSurnames: 'Ayala Bustamante',
        businessName: 'Easy Wash S.A.C.', businessTradeName: 'Easy Wash', businessRuc: '12512514578',
    },
    {
        id: 5, representativeNames: 'Mario', representativeSurnames: 'Salazar Miranda',
        businessName: 'Optical Comunications S.A.', businessTradeName: 'Optical Comunications', businessRuc: '12457965831',
    }
];
export var USERS: User[] = [
    {
        id: 1, email: 'fabrix3434@gmail.com', password: '123123123', phone: 956599908, accType: 1,
        investor: INVESTORS[0], business: undefined, created: '2022-03-10', updated: '2022-03-10' 
    },
    {
        id: 2, email: 'elgransanguchon@gmail.com', password: '123123123', phone: 958456452, accType: 2,
        investor: undefined, business: BUSINESSES[0], created: '2022-03-10', updated: '2022-03-10' 
    },
    {
        id: 3, email: 'laboratoriojesus@gmail.com', password: '123123123', phone: 958456452, accType: 2,
        investor: undefined, business: BUSINESSES[1], created: '2022-03-10', updated: '2022-03-10' 
    },
    {
        id: 4, email: 'elbuenporte@gmail.com', password: '123123123', phone: 958456452, accType: 2,
        investor: undefined, business: BUSINESSES[2], created: '2022-03-10', updated: '2022-03-10' 
    },
    {
        id: 5, email: 'easywash@gmail.com', password: '123123123', phone: 958456452, accType: 2,
        investor: undefined, business: BUSINESSES[3], created: '2022-03-10', updated: '2022-03-10' 
    },
    {
        id: 6, email: 'diegoespinoza@yahoo.com', password: '123123123', phone: 958484751, accType: 1,
        investor: INVESTORS[1], business: undefined, created: '2022-03-10', updated: '2022-03-10' 
    },
    {
        id: 7, email: 'leonardoraymondi@gmail.com', password: '123123123', phone: 956599874, accType: 1,
        investor: INVESTORS[2], business: undefined, created: '2022-03-10', updated: '2022-03-10' 
    },
    {
        id: 8, email: 'opticalcom@gmail.com', password: '123123123', phone: 955684159, accType: 2,
        investor: undefined, business: BUSINESSES[4], created: '2022-03-10', updated: '2022-03-10' 
    },
];
export var INVESTMENTTYPES: InvestmentType[] = [
    { name: 'Equity' }, { name: 'Factoring' }, { name: 'Lending' }
];
export var INVESTMENTOFFERS: InvestmentOffer[] = [
    {
        id: 1, investmentName: 'El Gran Sanguchón E.I.R.L.',
        investmentDesc: "Somos una sanguchería ubicada en Lince y necesitamos capital para adquirir nuevos equipos.",
        investmentHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, enim feugiat accumsan malesuada, risus lectus aliquet est, eget porta tellus dui vel nulla. Nam luctus, lacus in porttitor dignissim, tortor metus efficitur arcu, eu imperdiet neque quam at nibh. Cras sed vehicula sapien. Quisque quis mauris scelerisque, fringilla justo quis, sagittis ante. Proin fermentum neque vitae dui luctus, et volutpat tellus commodo. Etiam sit amet risus a sem dapibus dignissim quis ut turpis. Aliquam ac tellus non ante interdum scelerisque. Nam at enim id enim vehicula dapibus non quis ligula. Suspendisse faucibus, neque at varius sollicitudin, arcu arcu ullamcorper nisi, at efficitur mi turpis ut quam. Nulla a justo id urna pellentesque mollis id id magna.\nDuis auctor porttitor mi sit amet pharetra. Fusce nec vulputate lorem. Aenean id tincidunt nisl, nec feugiat ligula. Praesent eu pharetra sapien. Curabitur efficitur vestibulum diam sit amet gravida. Cras efficitur tristique dolor, a elementum lectus convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu urna, commodo ac tristique non, maximus ut lacus. Proin auctor scelerisque ligula semper tristique. Morbi tincidunt metus a est dictum tincidunt. Sed tempor semper semper.\nSed maximus nisi hendrerit semper lobortis. Aenean eget ipsum nec sapien cursus porta nec quis tellus. In at libero elit. Nam nisi velit, volutpat sagittis pulvinar ac, pretium eget orci. Sed quis est odio. Mauris id arcu nec lacus eleifend feugiat. Nunc nisl risus, porttitor et dui sit amet, egestas placerat sem.\nAliquam viverra libero in finibus convallis. Vestibulum mattis pretium risus, eu porta risus euismod ac. Aliquam pharetra eu neque sed volutpat. Curabitur placerat euismod ligula, sed porttitor justo commodo vel. Suspendisse sed turpis id lectus porttitor rhoncus. Praesent fermentum lorem velit, in lobortis ex ultricies eu. Aenean eu euismod quam.\nInteger maximus quam hendrerit mattis ultricies. Aenean convallis at arcu et condimentum. Mauris ac efficitur odio. Aenean eu fermentum dui, eu viverra libero. Sed vitae tincidunt urna. In euismod maximus tristique. Cras sollicitudin mauris vitae vehicula euismod. Nunc dignissim quam eleifend, suscipit felis ac, auctor odio. Aenean molestie leo vel dictum consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, enim feugiat accumsan malesuada, risus lectus aliquet est, eget porta tellus dui vel nulla. Nam luctus, lacus in porttitor dignissim, tortor metus efficitur arcu, eu imperdiet neque quam at nibh. Cras sed vehicula sapien. Quisque quis mauris scelerisque, fringilla justo quis, sagittis ante. Proin fermentum neque vitae dui luctus, et volutpat tellus commodo. Etiam sit amet risus a sem dapibus dignissim quis ut turpis. Aliquam ac tellus non ante interdum scelerisque. Nam at enim id enim vehicula dapibus non quis ligula. Suspendisse faucibus, neque at varius sollicitudin, arcu arcu ullamcorper nisi, at efficitur mi turpis ut quam. Nulla a justo id urna pellentesque mollis id id magna.\nDuis auctor porttitor mi sit amet pharetra. Fusce nec vulputate lorem. Aenean id tincidunt nisl, nec feugiat ligula. Praesent eu pharetra sapien. Curabitur efficitur vestibulum diam sit amet gravida. Cras efficitur tristique dolor, a elementum lectus convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu urna, commodo ac tristique non, maximus ut lacus. Proin auctor scelerisque ligula semper tristique. Morbi tincidunt metus a est dictum tincidunt. Sed tempor semper semper.\nSed maximus nisi hendrerit semper lobortis. Aenean eget ipsum nec sapien cursus porta nec quis tellus. In at libero elit. Nam nisi velit, volutpat sagittis pulvinar ac, pretium eget orci. Sed quis est odio. Mauris id arcu nec lacus eleifend feugiat. Nunc nisl risus, porttitor et dui sit amet, egestas placerat sem.\nAliquam viverra libero in finibus convallis. Vestibulum mattis pretium risus, eu porta risus euismod ac. Aliquam pharetra eu neque sed volutpat. Curabitur placerat euismod ligula, sed porttitor justo commodo vel. Suspendisse sed turpis id lectus porttitor rhoncus. Praesent fermentum lorem velit, in lobortis ex ultricies eu. Aenean eu euismod quam.\nInteger maximus quam hendrerit mattis ultricies. Aenean convallis at arcu et condimentum. Mauris ac efficitur odio. Aenean eu fermentum dui, eu viverra libero. Sed vitae tincidunt urna. In euismod maximus tristique. Cras sollicitudin mauris vitae vehicula euismod. Nunc dignissim quam eleifend, suscipit felis ac, auctor odio. Aenean molestie leo vel dictum consequat.',
        investmentRisks: '',
        investmentEnvironmentalCommitments: '',
        investmentType: INVESTMENTTYPES[1], financingTarget: 100000.00, currentFinancing: 1200.00,
        annualizedRate: 0.1250, endDate: '2022-07-27', created: '2022-04-01', updated: '2022-04-01',
        userOwner : USERS[1], imageURL: '../assets/img/businesses/sangucheria.jpg',
        backers: [USERS[5], USERS[6]]
    },
    {
        id: 2, investmentName: 'Optical Comunications S.A.',
        investmentDesc: "La empresa de telecomunicaciones Optical Comunications solicita capital para adelantar pagos a la SUNAT.",
        investmentHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, enim feugiat accumsan malesuada, risus lectus aliquet est, eget porta tellus dui vel nulla. Nam luctus, lacus in porttitor dignissim, tortor metus efficitur arcu, eu imperdiet neque quam at nibh. Cras sed vehicula sapien. Quisque quis mauris scelerisque, fringilla justo quis, sagittis ante. Proin fermentum neque vitae dui luctus, et volutpat tellus commodo. Etiam sit amet risus a sem dapibus dignissim quis ut turpis. Aliquam ac tellus non ante interdum scelerisque. Nam at enim id enim vehicula dapibus non quis ligula. Suspendisse faucibus, neque at varius sollicitudin, arcu arcu ullamcorper nisi, at efficitur mi turpis ut quam. Nulla a justo id urna pellentesque mollis id id magna.\nDuis auctor porttitor mi sit amet pharetra. Fusce nec vulputate lorem. Aenean id tincidunt nisl, nec feugiat ligula. Praesent eu pharetra sapien. Curabitur efficitur vestibulum diam sit amet gravida. Cras efficitur tristique dolor, a elementum lectus convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu urna, commodo ac tristique non, maximus ut lacus. Proin auctor scelerisque ligula semper tristique. Morbi tincidunt metus a est dictum tincidunt. Sed tempor semper semper.\nSed maximus nisi hendrerit semper lobortis. Aenean eget ipsum nec sapien cursus porta nec quis tellus. In at libero elit. Nam nisi velit, volutpat sagittis pulvinar ac, pretium eget orci. Sed quis est odio. Mauris id arcu nec lacus eleifend feugiat. Nunc nisl risus, porttitor et dui sit amet, egestas placerat sem.\nAliquam viverra libero in finibus convallis. Vestibulum mattis pretium risus, eu porta risus euismod ac. Aliquam pharetra eu neque sed volutpat. Curabitur placerat euismod ligula, sed porttitor justo commodo vel. Suspendisse sed turpis id lectus porttitor rhoncus. Praesent fermentum lorem velit, in lobortis ex ultricies eu. Aenean eu euismod quam.\nInteger maximus quam hendrerit mattis ultricies. Aenean convallis at arcu et condimentum. Mauris ac efficitur odio. Aenean eu fermentum dui, eu viverra libero. Sed vitae tincidunt urna. In euismod maximus tristique. Cras sollicitudin mauris vitae vehicula euismod. Nunc dignissim quam eleifend, suscipit felis ac, auctor odio. Aenean molestie leo vel dictum consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, enim feugiat accumsan malesuada, risus lectus aliquet est, eget porta tellus dui vel nulla. Nam luctus, lacus in porttitor dignissim, tortor metus efficitur arcu, eu imperdiet neque quam at nibh. Cras sed vehicula sapien. Quisque quis mauris scelerisque, fringilla justo quis, sagittis ante. Proin fermentum neque vitae dui luctus, et volutpat tellus commodo. Etiam sit amet risus a sem dapibus dignissim quis ut turpis. Aliquam ac tellus non ante interdum scelerisque. Nam at enim id enim vehicula dapibus non quis ligula. Suspendisse faucibus, neque at varius sollicitudin, arcu arcu ullamcorper nisi, at efficitur mi turpis ut quam. Nulla a justo id urna pellentesque mollis id id magna.\nDuis auctor porttitor mi sit amet pharetra. Fusce nec vulputate lorem. Aenean id tincidunt nisl, nec feugiat ligula. Praesent eu pharetra sapien. Curabitur efficitur vestibulum diam sit amet gravida. Cras efficitur tristique dolor, a elementum lectus convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu urna, commodo ac tristique non, maximus ut lacus. Proin auctor scelerisque ligula semper tristique. Morbi tincidunt metus a est dictum tincidunt. Sed tempor semper semper.\nSed maximus nisi hendrerit semper lobortis. Aenean eget ipsum nec sapien cursus porta nec quis tellus. In at libero elit. Nam nisi velit, volutpat sagittis pulvinar ac, pretium eget orci. Sed quis est odio. Mauris id arcu nec lacus eleifend feugiat. Nunc nisl risus, porttitor et dui sit amet, egestas placerat sem.\nAliquam viverra libero in finibus convallis. Vestibulum mattis pretium risus, eu porta risus euismod ac. Aliquam pharetra eu neque sed volutpat. Curabitur placerat euismod ligula, sed porttitor justo commodo vel. Suspendisse sed turpis id lectus porttitor rhoncus. Praesent fermentum lorem velit, in lobortis ex ultricies eu. Aenean eu euismod quam.\nInteger maximus quam hendrerit mattis ultricies. Aenean convallis at arcu et condimentum. Mauris ac efficitur odio. Aenean eu fermentum dui, eu viverra libero. Sed vitae tincidunt urna. In euismod maximus tristique. Cras sollicitudin mauris vitae vehicula euismod. Nunc dignissim quam eleifend, suscipit felis ac, auctor odio. Aenean molestie leo vel dictum consequat.',
        investmentRisks: '',
        investmentEnvironmentalCommitments: '',
        investmentType: INVESTMENTTYPES[1], financingTarget: 20000.00, currentFinancing: 6154.50,
        annualizedRate: 0.1305, endDate: '2022-08-10', created: '2022-04-01', updated: '2022-04-01',
        userOwner : USERS[7], imageURL: '../assets/img/businesses/optical_com.jpg',
        backers: [USERS[5], USERS[6]]
    },
    {
        id: 3, investmentName: 'Laboratorio Jesús S.A.C.',
        investmentDesc: 'El laboratorio "Jesús" ubicado en Jesús María solicita financiamiento para adquirir un nuevo local.',
        investmentHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, enim feugiat accumsan malesuada, risus lectus aliquet est, eget porta tellus dui vel nulla. Nam luctus, lacus in porttitor dignissim, tortor metus efficitur arcu, eu imperdiet neque quam at nibh. Cras sed vehicula sapien. Quisque quis mauris scelerisque, fringilla justo quis, sagittis ante. Proin fermentum neque vitae dui luctus, et volutpat tellus commodo. Etiam sit amet risus a sem dapibus dignissim quis ut turpis. Aliquam ac tellus non ante interdum scelerisque. Nam at enim id enim vehicula dapibus non quis ligula. Suspendisse faucibus, neque at varius sollicitudin, arcu arcu ullamcorper nisi, at efficitur mi turpis ut quam. Nulla a justo id urna pellentesque mollis id id magna.\nDuis auctor porttitor mi sit amet pharetra. Fusce nec vulputate lorem. Aenean id tincidunt nisl, nec feugiat ligula. Praesent eu pharetra sapien. Curabitur efficitur vestibulum diam sit amet gravida. Cras efficitur tristique dolor, a elementum lectus convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu urna, commodo ac tristique non, maximus ut lacus. Proin auctor scelerisque ligula semper tristique. Morbi tincidunt metus a est dictum tincidunt. Sed tempor semper semper.\nSed maximus nisi hendrerit semper lobortis. Aenean eget ipsum nec sapien cursus porta nec quis tellus. In at libero elit. Nam nisi velit, volutpat sagittis pulvinar ac, pretium eget orci. Sed quis est odio. Mauris id arcu nec lacus eleifend feugiat. Nunc nisl risus, porttitor et dui sit amet, egestas placerat sem.\nAliquam viverra libero in finibus convallis. Vestibulum mattis pretium risus, eu porta risus euismod ac. Aliquam pharetra eu neque sed volutpat. Curabitur placerat euismod ligula, sed porttitor justo commodo vel. Suspendisse sed turpis id lectus porttitor rhoncus. Praesent fermentum lorem velit, in lobortis ex ultricies eu. Aenean eu euismod quam.\nInteger maximus quam hendrerit mattis ultricies. Aenean convallis at arcu et condimentum. Mauris ac efficitur odio. Aenean eu fermentum dui, eu viverra libero. Sed vitae tincidunt urna. In euismod maximus tristique. Cras sollicitudin mauris vitae vehicula euismod. Nunc dignissim quam eleifend, suscipit felis ac, auctor odio. Aenean molestie leo vel dictum consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, enim feugiat accumsan malesuada, risus lectus aliquet est, eget porta tellus dui vel nulla. Nam luctus, lacus in porttitor dignissim, tortor metus efficitur arcu, eu imperdiet neque quam at nibh. Cras sed vehicula sapien. Quisque quis mauris scelerisque, fringilla justo quis, sagittis ante. Proin fermentum neque vitae dui luctus, et volutpat tellus commodo. Etiam sit amet risus a sem dapibus dignissim quis ut turpis. Aliquam ac tellus non ante interdum scelerisque. Nam at enim id enim vehicula dapibus non quis ligula. Suspendisse faucibus, neque at varius sollicitudin, arcu arcu ullamcorper nisi, at efficitur mi turpis ut quam. Nulla a justo id urna pellentesque mollis id id magna.\nDuis auctor porttitor mi sit amet pharetra. Fusce nec vulputate lorem. Aenean id tincidunt nisl, nec feugiat ligula. Praesent eu pharetra sapien. Curabitur efficitur vestibulum diam sit amet gravida. Cras efficitur tristique dolor, a elementum lectus convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu urna, commodo ac tristique non, maximus ut lacus. Proin auctor scelerisque ligula semper tristique. Morbi tincidunt metus a est dictum tincidunt. Sed tempor semper semper.\nSed maximus nisi hendrerit semper lobortis. Aenean eget ipsum nec sapien cursus porta nec quis tellus. In at libero elit. Nam nisi velit, volutpat sagittis pulvinar ac, pretium eget orci. Sed quis est odio. Mauris id arcu nec lacus eleifend feugiat. Nunc nisl risus, porttitor et dui sit amet, egestas placerat sem.\nAliquam viverra libero in finibus convallis. Vestibulum mattis pretium risus, eu porta risus euismod ac. Aliquam pharetra eu neque sed volutpat. Curabitur placerat euismod ligula, sed porttitor justo commodo vel. Suspendisse sed turpis id lectus porttitor rhoncus. Praesent fermentum lorem velit, in lobortis ex ultricies eu. Aenean eu euismod quam.\nInteger maximus quam hendrerit mattis ultricies. Aenean convallis at arcu et condimentum. Mauris ac efficitur odio. Aenean eu fermentum dui, eu viverra libero. Sed vitae tincidunt urna. In euismod maximus tristique. Cras sollicitudin mauris vitae vehicula euismod. Nunc dignissim quam eleifend, suscipit felis ac, auctor odio. Aenean molestie leo vel dictum consequat.',
        investmentRisks: '',
        investmentEnvironmentalCommitments: '',
        investmentType: INVESTMENTTYPES[0],
        financingTarget: 50600.00, currentFinancing: 505.50, annualizedRate: 0.1110,
        endDate: '2022-06-01', created: '2022-04-01', updated: '2022-04-01',
        userOwner : USERS[2], imageURL: '../assets/img/businesses/laboratorio.jpg',
        backers: [USERS[5], USERS[6]]
    },
    {
        id: 4, investmentName: 'El Buen Porte E.I.R.L.',
        investmentDesc: 'Somos una tienda de ropa ubicada en Miraflores y necesitamos capital para desarrollar un nuevo tipo de tela.',
        investmentHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, enim feugiat accumsan malesuada, risus lectus aliquet est, eget porta tellus dui vel nulla. Nam luctus, lacus in porttitor dignissim, tortor metus efficitur arcu, eu imperdiet neque quam at nibh. Cras sed vehicula sapien. Quisque quis mauris scelerisque, fringilla justo quis, sagittis ante. Proin fermentum neque vitae dui luctus, et volutpat tellus commodo. Etiam sit amet risus a sem dapibus dignissim quis ut turpis. Aliquam ac tellus non ante interdum scelerisque. Nam at enim id enim vehicula dapibus non quis ligula. Suspendisse faucibus, neque at varius sollicitudin, arcu arcu ullamcorper nisi, at efficitur mi turpis ut quam. Nulla a justo id urna pellentesque mollis id id magna.\nDuis auctor porttitor mi sit amet pharetra. Fusce nec vulputate lorem. Aenean id tincidunt nisl, nec feugiat ligula. Praesent eu pharetra sapien. Curabitur efficitur vestibulum diam sit amet gravida. Cras efficitur tristique dolor, a elementum lectus convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu urna, commodo ac tristique non, maximus ut lacus. Proin auctor scelerisque ligula semper tristique. Morbi tincidunt metus a est dictum tincidunt. Sed tempor semper semper.\nSed maximus nisi hendrerit semper lobortis. Aenean eget ipsum nec sapien cursus porta nec quis tellus. In at libero elit. Nam nisi velit, volutpat sagittis pulvinar ac, pretium eget orci. Sed quis est odio. Mauris id arcu nec lacus eleifend feugiat. Nunc nisl risus, porttitor et dui sit amet, egestas placerat sem.\nAliquam viverra libero in finibus convallis. Vestibulum mattis pretium risus, eu porta risus euismod ac. Aliquam pharetra eu neque sed volutpat. Curabitur placerat euismod ligula, sed porttitor justo commodo vel. Suspendisse sed turpis id lectus porttitor rhoncus. Praesent fermentum lorem velit, in lobortis ex ultricies eu. Aenean eu euismod quam.\nInteger maximus quam hendrerit mattis ultricies. Aenean convallis at arcu et condimentum. Mauris ac efficitur odio. Aenean eu fermentum dui, eu viverra libero. Sed vitae tincidunt urna. In euismod maximus tristique. Cras sollicitudin mauris vitae vehicula euismod. Nunc dignissim quam eleifend, suscipit felis ac, auctor odio. Aenean molestie leo vel dictum consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, enim feugiat accumsan malesuada, risus lectus aliquet est, eget porta tellus dui vel nulla. Nam luctus, lacus in porttitor dignissim, tortor metus efficitur arcu, eu imperdiet neque quam at nibh. Cras sed vehicula sapien. Quisque quis mauris scelerisque, fringilla justo quis, sagittis ante. Proin fermentum neque vitae dui luctus, et volutpat tellus commodo. Etiam sit amet risus a sem dapibus dignissim quis ut turpis. Aliquam ac tellus non ante interdum scelerisque. Nam at enim id enim vehicula dapibus non quis ligula. Suspendisse faucibus, neque at varius sollicitudin, arcu arcu ullamcorper nisi, at efficitur mi turpis ut quam. Nulla a justo id urna pellentesque mollis id id magna.\nDuis auctor porttitor mi sit amet pharetra. Fusce nec vulputate lorem. Aenean id tincidunt nisl, nec feugiat ligula. Praesent eu pharetra sapien. Curabitur efficitur vestibulum diam sit amet gravida. Cras efficitur tristique dolor, a elementum lectus convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu urna, commodo ac tristique non, maximus ut lacus. Proin auctor scelerisque ligula semper tristique. Morbi tincidunt metus a est dictum tincidunt. Sed tempor semper semper.\nSed maximus nisi hendrerit semper lobortis. Aenean eget ipsum nec sapien cursus porta nec quis tellus. In at libero elit. Nam nisi velit, volutpat sagittis pulvinar ac, pretium eget orci. Sed quis est odio. Mauris id arcu nec lacus eleifend feugiat. Nunc nisl risus, porttitor et dui sit amet, egestas placerat sem.\nAliquam viverra libero in finibus convallis. Vestibulum mattis pretium risus, eu porta risus euismod ac. Aliquam pharetra eu neque sed volutpat. Curabitur placerat euismod ligula, sed porttitor justo commodo vel. Suspendisse sed turpis id lectus porttitor rhoncus. Praesent fermentum lorem velit, in lobortis ex ultricies eu. Aenean eu euismod quam.\nInteger maximus quam hendrerit mattis ultricies. Aenean convallis at arcu et condimentum. Mauris ac efficitur odio. Aenean eu fermentum dui, eu viverra libero. Sed vitae tincidunt urna. In euismod maximus tristique. Cras sollicitudin mauris vitae vehicula euismod. Nunc dignissim quam eleifend, suscipit felis ac, auctor odio. Aenean molestie leo vel dictum consequat.',
        investmentRisks: '',
        investmentEnvironmentalCommitments: '',
        investmentType: INVESTMENTTYPES[2], financingTarget: 21548.00, currentFinancing: 210.00,
        annualizedRate: 0.1311, endDate: '2022-07-21', created: '2022-04-01', updated: '2022-04-01',
        userOwner : USERS[3], imageURL: '../assets/img/businesses/tienda-ropa.jpg',
        backers: [USERS[5], USERS[6]]
    },
    {
        id: 5, investmentName: 'Easy Wash S.A.C.',
        investmentDesc: 'Somos el Autolavado "Easy Wash" y solicitamos capital para adquirir nuevas y modernas máquinas de lavado.',
        investmentHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, enim feugiat accumsan malesuada, risus lectus aliquet est, eget porta tellus dui vel nulla. Nam luctus, lacus in porttitor dignissim, tortor metus efficitur arcu, eu imperdiet neque quam at nibh. Cras sed vehicula sapien. Quisque quis mauris scelerisque, fringilla justo quis, sagittis ante. Proin fermentum neque vitae dui luctus, et volutpat tellus commodo. Etiam sit amet risus a sem dapibus dignissim quis ut turpis. Aliquam ac tellus non ante interdum scelerisque. Nam at enim id enim vehicula dapibus non quis ligula. Suspendisse faucibus, neque at varius sollicitudin, arcu arcu ullamcorper nisi, at efficitur mi turpis ut quam. Nulla a justo id urna pellentesque mollis id id magna.\nDuis auctor porttitor mi sit amet pharetra. Fusce nec vulputate lorem. Aenean id tincidunt nisl, nec feugiat ligula. Praesent eu pharetra sapien. Curabitur efficitur vestibulum diam sit amet gravida. Cras efficitur tristique dolor, a elementum lectus convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu urna, commodo ac tristique non, maximus ut lacus. Proin auctor scelerisque ligula semper tristique. Morbi tincidunt metus a est dictum tincidunt. Sed tempor semper semper.\nSed maximus nisi hendrerit semper lobortis. Aenean eget ipsum nec sapien cursus porta nec quis tellus. In at libero elit. Nam nisi velit, volutpat sagittis pulvinar ac, pretium eget orci. Sed quis est odio. Mauris id arcu nec lacus eleifend feugiat. Nunc nisl risus, porttitor et dui sit amet, egestas placerat sem.\nAliquam viverra libero in finibus convallis. Vestibulum mattis pretium risus, eu porta risus euismod ac. Aliquam pharetra eu neque sed volutpat. Curabitur placerat euismod ligula, sed porttitor justo commodo vel. Suspendisse sed turpis id lectus porttitor rhoncus. Praesent fermentum lorem velit, in lobortis ex ultricies eu. Aenean eu euismod quam.\nInteger maximus quam hendrerit mattis ultricies. Aenean convallis at arcu et condimentum. Mauris ac efficitur odio. Aenean eu fermentum dui, eu viverra libero. Sed vitae tincidunt urna. In euismod maximus tristique. Cras sollicitudin mauris vitae vehicula euismod. Nunc dignissim quam eleifend, suscipit felis ac, auctor odio. Aenean molestie leo vel dictum consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, enim feugiat accumsan malesuada, risus lectus aliquet est, eget porta tellus dui vel nulla. Nam luctus, lacus in porttitor dignissim, tortor metus efficitur arcu, eu imperdiet neque quam at nibh. Cras sed vehicula sapien. Quisque quis mauris scelerisque, fringilla justo quis, sagittis ante. Proin fermentum neque vitae dui luctus, et volutpat tellus commodo. Etiam sit amet risus a sem dapibus dignissim quis ut turpis. Aliquam ac tellus non ante interdum scelerisque. Nam at enim id enim vehicula dapibus non quis ligula. Suspendisse faucibus, neque at varius sollicitudin, arcu arcu ullamcorper nisi, at efficitur mi turpis ut quam. Nulla a justo id urna pellentesque mollis id id magna.\nDuis auctor porttitor mi sit amet pharetra. Fusce nec vulputate lorem. Aenean id tincidunt nisl, nec feugiat ligula. Praesent eu pharetra sapien. Curabitur efficitur vestibulum diam sit amet gravida. Cras efficitur tristique dolor, a elementum lectus convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu urna, commodo ac tristique non, maximus ut lacus. Proin auctor scelerisque ligula semper tristique. Morbi tincidunt metus a est dictum tincidunt. Sed tempor semper semper.\nSed maximus nisi hendrerit semper lobortis. Aenean eget ipsum nec sapien cursus porta nec quis tellus. In at libero elit. Nam nisi velit, volutpat sagittis pulvinar ac, pretium eget orci. Sed quis est odio. Mauris id arcu nec lacus eleifend feugiat. Nunc nisl risus, porttitor et dui sit amet, egestas placerat sem.\nAliquam viverra libero in finibus convallis. Vestibulum mattis pretium risus, eu porta risus euismod ac. Aliquam pharetra eu neque sed volutpat. Curabitur placerat euismod ligula, sed porttitor justo commodo vel. Suspendisse sed turpis id lectus porttitor rhoncus. Praesent fermentum lorem velit, in lobortis ex ultricies eu. Aenean eu euismod quam.\nInteger maximus quam hendrerit mattis ultricies. Aenean convallis at arcu et condimentum. Mauris ac efficitur odio. Aenean eu fermentum dui, eu viverra libero. Sed vitae tincidunt urna. In euismod maximus tristique. Cras sollicitudin mauris vitae vehicula euismod. Nunc dignissim quam eleifend, suscipit felis ac, auctor odio. Aenean molestie leo vel dictum consequat.',
        investmentRisks: '',
        investmentEnvironmentalCommitments: '',
        investmentType: INVESTMENTTYPES[0], financingTarget: 1520.00, currentFinancing: 322.00, 
        annualizedRate: 0.1095, endDate: '2022-08-15', created: '2022-04-01', updated: '2022-04-01',
        userOwner : USERS[4], imageURL: '../assets/img/businesses/lavado-carro.jpg',
        backers: [USERS[5], USERS[6]]
    }
];
export var INVESTMENTOPERATIONS: InvestmentOperation[] = [];
export var TRANSACTIONOPERATIONS: TransactionOperation[] = [];

// UserLastId
export function addToUserLastId(newValue: number) {userLastId += newValue;}
export function setUserLastId(newValue: number) {userLastId = newValue;}
export function getUserLastId(): number{return userLastId;}
// InvestorLastId
export function addToInvestorLastId(newValue: number) {investorLastId += newValue;}
export function setInvestorLastId(newValue: number) {investorLastId = newValue;}
export function getInvestorLastId(): number{return investorLastId;}
// BusinessLastId
export function addToBusinessLastId(newValue: number) {businessLastId += newValue;}
export function setBusinessLastId(newValue: number) {businessLastId = newValue;}
export function getBusinessLastId(): number{return businessLastId;}
// InvestmentOfferLastId
export function setInvestmentOfferLastId(newValue: number) {investmentOfferLastId = newValue;}
export function getInvestmentOfferLastId(): number {return investmentOfferLastId;}
// InvestmentOperationLastId
export function setInvestmentOperationLastId(newValue: number) {investmentOperationLastId = newValue;}
export function getInvestmentOperationLastId(): number {return investmentOperationLastId;}
// TransactionOperationLastId
export function setTransactionOperationLastId(newValue: number) {transactionOperationLastId = newValue;}
export function getTransactionOperationLastId(): number {return transactionOperationLastId;}
// highestFinancingTarget
export function sethighestFinancingTarget(newValue: number[]) {highestFinancingTarget = newValue;}
export function gethighestFinancingTarget(): number[] {return highestFinancingTarget;}