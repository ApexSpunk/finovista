import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';


function FormElements(props) {

    const { formElements, handleRegistor, name, toast, ToastContainer, title } = props

    let [form, setForm] = useState({})

    formElements.forEach(element => {
        element[element.length - 1] == '*' ? form[element.slice(0, element.length - 1)] = element : form[element] = element
    });



    const [showModal, setShowModal] = useState(true);
    const [stateData, setStateData] = useState('')
    const [cityData, setCityData] = useState([])

    let stateObj = {
        "Andaman and Nicobar Islands": [
            "Port Blair"
        ],
        "Andhra Pradesh": [
            "Adoni",
            "Amalapuram",
            "Anakapalle",
            "Anantapur",
            "Bapatla",
            "Bheemunipatnam",
            "Bhimavaram",
            "Bobbili",
            "Chilakaluripet",
            "Chirala",
            "Chittoor",
            "Dharmavaram",
            "Eluru",
            "Gooty",
            "Gudivada",
            "Gudur",
            "Guntakal",
            "Guntur",
            "Hindupur",
            "Jaggaiahpet",
            "Jammalamadugu",
            "Kadapa",
            "Kadiri",
            "Kakinada",
            "Kandukur",
            "Kavali",
            "Kovvur",
            "Kurnool",
            "Macherla",
            "Machilipatnam",
            "Madanapalle",
            "Mandapeta",
            "Markapur",
            "Nagari",
            "Naidupet",
            "Nandyal",
            "Narasapuram",
            "Narasaraopet",
            "Narsipatnam",
            "Nellore",
            "Nidadavole",
            "Nuzvid",
            "Ongole",
            "Palacole",
            "Palasa Kasibugga",
            "Parvathipuram",
            "Pedana",
            "Peddapuram",
            "Pithapuram",
            "Ponnur",
            "Proddatur",
            "Punganur",
            "Puttur",
            "Rajahmundry",
            "Rajam",
            "Rajampet",
            "Ramachandrapuram",
            "Rayachoti",
            "Rayadurg",
            "Renigunta",
            "Repalle",
            "Salur",
            "Samalkot",
            "Sattenapalle",
            "Srikakulam",
            "Srikalahasti",
            "Srisailam Project (Right Flank Colony) Township",
            "Sullurpeta",
            "Tadepalligudem",
            "Tadpatri",
            "Tanuku",
            "Tenali",
            "Tirupati",
            "Tiruvuru",
            "Tuni",
            "Uravakonda",
            "Venkatagiri",
            "Vijayawada",
            "Vinukonda",
            "Visakhapatnam",
            "Vizianagaram",
            "Yemmiganur",
            "Yerraguntla"
        ],
        "Arunachal Pradesh": [
            "Naharlagun",
            "Pasighat"
        ],
        "Assam": [
            "Barpeta",
            "Bongaigaon City",
            "Dhubri",
            "Dibrugarh",
            "Diphu",
            "Goalpara",
            "Guwahati",
            "Jorhat",
            "Karimganj",
            "Lanka",
            "Lumding",
            "Mangaldoi",
            "Mankachar",
            "Margherita",
            "Mariani",
            "Marigaon",
            "Nagaon",
            "Nalbari",
            "North Lakhimpur",
            "Rangia",
            "Sibsagar",
            "Silapathar",
            "Silchar",
            "Tezpur",
            "Tinsukia"
        ],
        "Bihar": [
            "Araria",
            "Arrah",
            "Arwal",
            "Asarganj",
            "Aurangabad",
            "Bagaha",
            "Barh",
            "Begusarai",
            "Bettiah",
            "Bhabua",
            "Bhagalpur",
            "Buxar",
            "Chhapra",
            "Darbhanga",
            "Dehri-on-Sone",
            "Dumraon",
            "Forbesganj",
            "Gaya",
            "Gopalganj",
            "Hajipur",
            "Jamalpur",
            "Jamui",
            "Jehanabad",
            "Katihar",
            "Kishanganj",
            "Lakhisarai",
            "Lalganj",
            "Madhepura",
            "Madhubani",
            "Maharajganj",
            "Mahnar Bazar",
            "Makhdumpur",
            "Maner",
            "Manihari",
            "Marhaura",
            "Masaurhi",
            "Mirganj",
            "Mokameh",
            "Motihari",
            "Motipur",
            "Munger",
            "Murliganj",
            "Muzaffarpur",
            "Narkatiaganj",
            "Naugachhia",
            "Nawada",
            "Nokha",
            "Patna",
            "Piro",
            "Purnia",
            "Rafiganj",
            "Rajgir",
            "Ramnagar",
            "Raxaul Bazar",
            "Revelganj",
            "Rosera",
            "Saharsa",
            "Samastipur",
            "Sasaram",
            "Sheikhpura",
            "Sheohar",
            "Sherghati",
            "Silao",
            "Sitamarhi",
            "Siwan",
            "Sonepur",
            "Sugauli",
            "Sultanganj",
            "Supaul",
            "Warisaliganj"
        ],
        "Chandigarh": [
            "Chandigarh"
        ],
        "Chhattisgarh": [
            "Ambikapur",
            "Bhatapara",
            "Bhilai Nagar",
            "Bilaspur",
            "Chirmiri",
            "Dalli-Rajhara",
            "Dhamtari",
            "Durg",
            "Jagdalpur",
            "Korba",
            "Mahasamund",
            "Manendragarh",
            "Mungeli",
            "Naila Janjgir",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sakti",
            "Tilda Newra"
        ],
        "Dadra and Nagar Haveli": [
            "Silvassa"
        ],
        "Delhi": [
            "Delhi",
            "New Delhi"
        ],
        "Goa": [
            "Mapusa",
            "Margao",
            "Marmagao",
            "Panaji"
        ],
        "Gujarat": [
            "Adalaj",
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Anjar",
            "Ankleshwar",
            "Bharuch",
            "Bhavnagar",
            "Bhuj",
            "Chhapra",
            "Deesa",
            "Dhoraji",
            "Godhra",
            "Jamnagar",
            "Kadi",
            "Kapadvanj",
            "Keshod",
            "Khambhat",
            "Lathi",
            "Limbdi",
            "Lunawada",
            "Mahesana",
            "Mahuva",
            "Manavadar",
            "Mandvi",
            "Mangrol",
            "Mansa",
            "Mahemdabad",
            "Modasa",
            "Morvi",
            "Nadiad",
            "Navsari",
            "Padra",
            "Palanpur",
            "Palitana",
            "Pardi",
            "Patan",
            "Petlad",
            "Porbandar",
            "Radhanpur",
            "Rajkot",
            "Rajpipla",
            "Rajula",
            "Ranavav",
            "Rapar",
            "Salaya",
            "Sanand",
            "Savarkundla",
            "Sidhpur",
            "Sihor",
            "Songadh",
            "Surat",
            "Talaja",
            "Thangadh",
            "Tharad",
            "Umbergaon",
            "Umreth",
            "Una",
            "Unjha",
            "Upleta",
            "Vadnagar",
            "Vadodara",
            "Valsad",
            "Vapi",
            "Vapi",
            "Veraval",
            "Vijapur",
            "Viramgam",
            "Visnagar",
            "Vyara",
            "Wadhwan",
            "Wankaner"
        ],
        "Haryana": [
            "Bahadurgarh",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gohana",
            "Gurgaon",
            "Hansi",
            "Hisar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Ladwa",
            "Mahendragarh",
            "Mandi Dabwali",
            "Narnaul",
            "Narwana",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Pehowa",
            "Pinjore",
            "Rania",
            "Ratia",
            "Rewari",
            "Rohtak",
            "Safidon",
            "Samalkha",
            "Sarsod",
            "Shahbad",
            "Sirsa",
            "Sohna",
            "Sonipat",
            "Taraori",
            "Thanesar",
            "Tohana",
            "Yamunanagar"
        ],
        "Himachal Pradesh": [
            "Mandi",
            "Nahan",
            "Palampur",
            "Shimla",
            "Solan",
            "Sundarnagar"
        ],
        "Jammu and Kashmir": [
            "Anantnag",
            "Baramula",
            "Jammu",
            "Kathua",
            "Punch",
            "Rajauri",
            "Sopore",
            "Srinagar",
            "Udhampur"
        ],
        "Jharkhand": [
            "Adityapur",
            "Bokaro Steel City",
            "Chaibasa",
            "Chatra",
            "Chirkunda",
            "Medininagar (Daltonganj)",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "Giridih",
            "Gumia",
            "Hazaribag",
            "Jamshedpur",
            "Jhumri Tilaiya",
            "Lohardaga",
            "Madhupur",
            "Mihijam",
            "Musabani",
            "Pakaur",
            "Patratu",
            "Phusro",
            "Ramgarh",
            "Ranchi",
            "Sahibganj",
            "Saunda",
            "Simdega",
            "Tenu dam-cum-Kathhara"
        ],
        "Karnataka": [
            "Adyar",
            "Afzalpur",
            "Arsikere",
            "Athni",
            "Bengaluru",
            "Belagavi",
            "Ballari",
            "Chikkamagaluru",
            "Davanagere",
            "Gokak",
            "Hubli-Dharwad",
            "Karwar",
            "Kolar",
            "Lakshmeshwar",
            "Lingsugur",
            "Maddur",
            "Madhugiri",
            "Madikeri",
            "Magadi",
            "Mahalingapura",
            "Malavalli",
            "Malur",
            "Mandya",
            "Mangaluru",
            "Manvi",
            "Mudalagi",
            "Mudabidri",
            "Muddebihal",
            "Mudhol",
            "Mulbagal",
            "Mundargi",
            "Nanjangud",
            "Nargund",
            "Navalgund",
            "Nelamangala",
            "Pavagada",
            "Piriyapatna",
            "Puttur",
            "Rabkavi Banhatti",
            "Raayachuru",
            "Ranebennuru",
            "Ramanagaram",
            "Ramdurg",
            "Ranibennur",
            "Robertson Pet",
            "Ron",
            "Sadalagi",
            "Sagara",
            "Sakaleshapura",
            "Sindagi",
            "Sanduru",
            "Sankeshwara",
            "Saundatti-Yellamma",
            "Savanur",
            "Sedam",
            "Shahabad",
            "Shahpur",
            "Shiggaon",
            "Shikaripur",
            "Shivamogga",
            "Surapura",
            "Shrirangapattana",
            "Sidlaghatta",
            "Sindhagi",
            "Sindhnur",
            "Sira",
            "Sirsi",
            "Siruguppa",
            "Srinivaspur",
            "Tarikere",
            "Tekkalakote",
            "Terdal",
            "Talikota",
            "Tiptur",
            "Tumkur",
            "Udupi",
            "Vijayapura",
            "Wadi",
            "Yadgir"
        ],
        "Karnatka": [
            "Mysore"
        ],
        "Kerala": [
            "Adoor",
            "Alappuzha",
            "Attingal",
            "Chalakudy",
            "Changanassery",
            "Cherthala",
            "Chittur-Thathamangalam",
            "Guruvayoor",
            "Kanhangad",
            "Kannur",
            "Kasaragod",
            "Kayamkulam",
            "Kochi",
            "Kodungallur",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Kunnamkulam",
            "Malappuram",
            "Mattannur",
            "Mavelikkara",
            "Mavoor",
            "Muvattupuzha",
            "Nedumangad",
            "Neyyattinkara",
            "Nilambur",
            "Ottappalam",
            "Palai",
            "Palakkad",
            "Panamattom",
            "Panniyannur",
            "Pappinisseri",
            "Paravoor",
            "Pathanamthitta",
            "Peringathur",
            "Perinthalmanna",
            "Perumbavoor",
            "Ponnani",
            "Punalur",
            "Puthuppally",
            "Koyilandy",
            "Shoranur",
            "Taliparamba",
            "Thiruvalla",
            "Thiruvananthapuram",
            "Thodupuzha",
            "Thrissur",
            "Tirur",
            "Vaikom",
            "Varkala",
            "Vatakara"
        ],
        "Madhya Pradesh": [
            "Alirajpur",
            "Ashok Nagar",
            "Balaghat",
            "Bhopal",
            "Ganjbasoda",
            "Gwalior",
            "Indore",
            "Itarsi",
            "Jabalpur",
            "Lahar",
            "Maharajpur",
            "Mahidpur",
            "Maihar",
            "Malaj Khand",
            "Manasa",
            "Manawar",
            "Mandideep",
            "Mandla",
            "Mandsaur",
            "Mauganj",
            "Mhow Cantonment",
            "Mhowgaon",
            "Morena",
            "Multai",
            "Mundi",
            "Murwara (Katni)",
            "Nagda",
            "Nainpur",
            "Narsinghgarh",
            "Narsinghgarh",
            "Neemuch",
            "Nepanagar",
            "Niwari",
            "Nowgong",
            "Nowrozabad (Khodargama)",
            "Pachore",
            "Pali",
            "Panagar",
            "Pandhurna",
            "Panna",
            "Pasan",
            "Pipariya",
            "Pithampur",
            "Porsa",
            "Prithvipur",
            "Raghogarh-Vijaypur",
            "Rahatgarh",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rau",
            "Rehli",
            "Rewa",
            "Sabalgarh",
            "Sagar",
            "Sanawad",
            "Sarangpur",
            "Sarni",
            "Satna",
            "Sausar",
            "Sehore",
            "Sendhwa",
            "Seoni",
            "Seoni-Malwa",
            "Shahdol",
            "Shajapur",
            "Shamgarh",
            "Sheopur",
            "Shivpuri",
            "Shujalpur",
            "Sidhi",
            "Sihora",
            "Singrauli",
            "Sironj",
            "Sohagpur",
            "Tarana",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha",
            "Vijaypur",
            "Wara Seoni"
        ],
        "Maharashtra": [
            "Ahmednagar",
            "Akola",
            "Akot",
            "Amalner",
            "Ambejogai",
            "Amravati",
            "Anjangaon",
            "Arvi",
            "Aurangabad",
            "Bhiwandi",
            "Dhule",
            "Kalyan-Dombivali",
            "Ichalkaranji",
            "Kalyan-Dombivali",
            "Karjat",
            "Latur",
            "Loha",
            "Lonar",
            "Lonavla",
            "Mahad",
            "Malegaon",
            "Malkapur",
            "Mangalvedhe",
            "Mangrulpir",
            "Manjlegaon",
            "Manmad",
            "Manwath",
            "Mehkar",
            "Mhaswad",
            "Mira-Bhayandar",
            "Morshi",
            "Mukhed",
            "Mul",
            "Greater Mumbai",
            "Murtijapur",
            "Nagpur",
            "Nanded-Waghala",
            "Nandgaon",
            "Nandura",
            "Nandurbar",
            "Narkhed",
            "Nashik",
            "Navi Mumbai",
            "Nawapur",
            "Nilanga",
            "Osmanabad",
            "Ozar",
            "Pachora",
            "Paithan",
            "Palghar",
            "Pandharkaoda",
            "Pandharpur",
            "Panvel",
            "Parbhani",
            "Parli",
            "Partur",
            "Pathardi",
            "Pathri",
            "Patur",
            "Pauni",
            "Pen",
            "Phaltan",
            "Pulgaon",
            "Pune",
            "Purna",
            "Pusad",
            "Rahuri",
            "Rajura",
            "Ramtek",
            "Ratnagiri",
            "Raver",
            "Risod",
            "Sailu",
            "Sangamner",
            "Sangli",
            "Sangole",
            "Sasvad",
            "Satana",
            "Satara",
            "Savner",
            "Sawantwadi",
            "Shahade",
            "Shegaon",
            "Shendurjana",
            "Shirdi",
            "Shirpur-Warwade",
            "Shirur",
            "Shrigonda",
            "Shrirampur",
            "Sillod",
            "Sinnar",
            "Solapur",
            "Soyagaon",
            "Talegaon Dabhade",
            "Talode",
            "Tasgaon",
            "Thane",
            "Tirora",
            "Tuljapur",
            "Tumsar",
            "Uchgaon",
            "Udgir",
            "Umarga",
            "Umarkhed",
            "Umred",
            "Uran",
            "Uran Islampur",
            "Vadgaon Kasba",
            "Vaijapur",
            "Vasai-Virar",
            "Vita",
            "Wadgaon Road",
            "Wai",
            "Wani",
            "Wardha",
            "Warora",
            "Warud",
            "Washim",
            "Yavatmal",
            "Yawal",
            "Yevla"
        ],
        "Manipur": [
            "Imphal",
            "Lilong",
            "Mayang Imphal",
            "Thoubal"
        ],
        "Meghalaya": [
            "Nongstoin",
            "Shillong",
            "Tura"
        ],
        "Mizoram": [
            "Aizawl",
            "Lunglei",
            "Saiha"
        ],
        "Nagaland": [
            "Dimapur",
            "Kohima",
            "Mokokchung",
            "Tuensang",
            "Wokha",
            "Zunheboto"
        ],
        "Odisha": [
            "Balangir",
            "Baleshwar Town",
            "Barbil",
            "Bargarh",
            "Baripada Town",
            "Bhadrak",
            "Bhawanipatna",
            "Bhubaneswar",
            "Brahmapur",
            "Byasanagar",
            "Cuttack",
            "Dhenkanal",
            "Jatani",
            "Jharsuguda",
            "Kendrapara",
            "Kendujhar",
            "Malkangiri",
            "Nabarangapur",
            "Paradip",
            "Parlakhemundi",
            "Pattamundai",
            "Phulabani",
            "Puri",
            "Rairangpur",
            "Rajagangapur",
            "Raurkela",
            "Rayagada",
            "Sambalpur",
            "Soro",
            "Sunabeda",
            "Sundargarh",
            "Talcher",
            "Tarbha",
            "Titlagarh"
        ],
        "Puducherry": [
            "Karaikal",
            "Mahe",
            "Pondicherry",
            "Yanam"
        ],
        "Punjab": [
            "Amritsar",
            "Barnala",
            "Batala",
            "Bathinda",
            "Dhuri",
            "Faridkot",
            "Fazilka",
            "Firozpur",
            "Firozpur Cantt.",
            "Gobindgarh",
            "Gurdaspur",
            "Hoshiarpur",
            "Jagraon",
            "Jalandhar Cantt.",
            "Jalandhar",
            "Kapurthala",
            "Khanna",
            "Kharar",
            "Kot Kapura",
            "Longowal",
            "Ludhiana",
            "Malerkotla",
            "Malout",
            "Mansa",
            "Moga",
            "Mohali",
            "Morinda, India",
            "Mukerian",
            "Muktsar",
            "Nabha",
            "Nakodar",
            "Nangal",
            "Nawanshahr",
            "Pathankot",
            "Patiala",
            "Pattran",
            "Patti",
            "Phagwara",
            "Phillaur",
            "Qadian",
            "Raikot",
            "Rajpura",
            "Rampura Phul",
            "Rupnagar",
            "Samana",
            "Sangrur",
            "Sirhind Fatehgarh Sahib",
            "Sujanpur",
            "Sunam",
            "Talwara",
            "Tarn Taran",
            "Urmar Tanda",
            "Zira",
            "Zirakpur"
        ],
        "Rajasthan": [
            "Ajmer",
            "Alwar",
            "Bikaner",
            "Bharatpur",
            "Bhilwara",
            "Jaipur",
            "Jodhpur",
            "Lachhmangarh",
            "Ladnu",
            "Lakheri",
            "Lalsot",
            "Losal",
            "Makrana",
            "Malpura",
            "Mandalgarh",
            "Mandawa",
            "Mangrol",
            "Merta City",
            "Mount Abu",
            "Nadbai",
            "Nagar",
            "Nagaur",
            "Nasirabad",
            "Nathdwara",
            "Neem-Ka-Thana",
            "Nimbahera",
            "Nohar",
            "Nokha",
            "Pali",
            "Phalodi",
            "Phulera",
            "Pilani",
            "Pilibanga",
            "Pindwara",
            "Pipar City",
            "Prantij",
            "Pratapgarh",
            "Raisinghnagar",
            "Rajakhera",
            "Rajaldesar",
            "Rajgarh (Alwar)",
            "Rajgarh (Churu)",
            "Rajsamand",
            "Ramganj Mandi",
            "Ramngarh",
            "Ratangarh",
            "Rawatbhata",
            "Rawatsar",
            "Reengus",
            "Sadri",
            "Sadulshahar",
            "Sadulpur",
            "Sagwara",
            "Sambhar",
            "Sanchore",
            "Sangaria",
            "Sardarshahar",
            "Sawai Madhopur",
            "Shahpura",
            "Shahpura",
            "Sheoganj",
            "Sikar",
            "Sirohi",
            "Sojat",
            "Sri Madhopur",
            "Sujangarh",
            "Sumerpur",
            "Suratgarh",
            "Taranagar",
            "Todabhim",
            "Todaraisingh",
            "Tonk",
            "Udaipur",
            "Udaipurwati",
            "Vijainagar, Ajmer"
        ],
        "Tamil Nadu": [
            "Arakkonam",
            "Aruppukkottai",
            "Chennai",
            "Coimbatore",
            "Erode",
            "Gobichettipalayam",
            "Kancheepuram",
            "Karur",
            "Lalgudi",
            "Madurai",
            "Manachanallur",
            "Nagapattinam",
            "Nagercoil",
            "Namagiripettai",
            "Namakkal",
            "Nandivaram-Guduvancheri",
            "Nanjikottai",
            "Natham",
            "Nellikuppam",
            "Neyveli (TS)",
            "O' Valley",
            "Oddanchatram",
            "P.N.Patti",
            "Pacode",
            "Padmanabhapuram",
            "Palani",
            "Palladam",
            "Pallapatti",
            "Pallikonda",
            "Panagudi",
            "Panruti",
            "Paramakudi",
            "Parangipettai",
            "Pattukkottai",
            "Perambalur",
            "Peravurani",
            "Periyakulam",
            "Periyasemur",
            "Pernampattu",
            "Pollachi",
            "Polur",
            "Ponneri",
            "Pudukkottai",
            "Pudupattinam",
            "Puliyankudi",
            "Punjaipugalur",
            "Ranipet",
            "Rajapalayam",
            "Ramanathapuram",
            "Rameshwaram",
            "Rasipuram",
            "Salem",
            "Sankarankoil",
            "Sankari",
            "Sathyamangalam",
            "Sattur",
            "Shenkottai",
            "Sholavandan",
            "Sholingur",
            "Sirkali",
            "Sivaganga",
            "Sivagiri",
            "Sivakasi",
            "Srivilliputhur",
            "Surandai",
            "Suriyampalayam",
            "Tenkasi",
            "Thammampatti",
            "Thanjavur",
            "Tharamangalam",
            "Tharangambadi",
            "Theni Allinagaram",
            "Thirumangalam",
            "Thirupuvanam",
            "Thiruthuraipoondi",
            "Thiruvallur",
            "Thiruvarur",
            "Thuraiyur",
            "Tindivanam",
            "Tiruchendur",
            "Tiruchengode",
            "Tiruchirappalli",
            "Tirukalukundram",
            "Tirukkoyilur",
            "Tirunelveli",
            "Tirupathur",
            "Tirupathur",
            "Tiruppur",
            "Tiruttani",
            "Tiruvannamalai",
            "Tiruvethipuram",
            "Tittakudi",
            "Udhagamandalam",
            "Udumalaipettai",
            "Unnamalaikadai",
            "Usilampatti",
            "Uthamapalayam",
            "Uthiramerur",
            "Vadakkuvalliyur",
            "Vadalur",
            "Vadipatti",
            "Valparai",
            "Vandavasi",
            "Vaniyambadi",
            "Vedaranyam",
            "Vellakoil",
            "Vellore",
            "Vikramasingapuram",
            "Viluppuram",
            "Virudhachalam",
            "Virudhunagar",
            "Viswanatham"
        ],
        "Telangana": [
            "Adilabad",
            "Bellampalle",
            "Bhadrachalam",
            "Bhainsa",
            "Bhongir",
            "Bodhan",
            "Farooqnagar",
            "Gadwal",
            "Hyderabad",
            "Jagtial",
            "Jangaon",
            "Kagaznagar",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Koratla",
            "Kothagudem",
            "Kyathampalle",
            "Mahbubnagar",
            "Mancherial",
            "Mandamarri",
            "Manuguru",
            "Medak",
            "Miryalaguda",
            "Nagarkurnool",
            "Narayanpet",
            "Nirmal",
            "Nizamabad",
            "Palwancha",
            "Ramagundam",
            "Sadasivpet",
            "Sangareddy",
            "Siddipet",
            "Sircilla",
            "Suryapet",
            "Tandur",
            "Vikarabad",
            "Wanaparthy",
            "Warangal",
            "Yellandu"
        ],
        "Tripura": [
            "Agartala",
            "Belonia",
            "Dharmanagar",
            "Kailasahar",
            "Khowai",
            "Pratapgarh",
            "Udaipur"
        ],
        "Uttar Pradesh": [
            "Achhnera",
            "Agra",
            "Aligarh",
            "Allahabad",
            "Amroha",
            "Azamgarh",
            "Bahraich",
            "Chandausi",
            "Etawah",
            "Firozabad",
            "Fatehpur Sikri",
            "Hapur",
            "Hardoi ",
            "Jhansi",
            "Kalpi",
            "Kanpur",
            "Khair",
            "Laharpur",
            "Lakhimpur",
            "Lal Gopalganj Nindaura",
            "Lalitpur",
            "Lalganj",
            "Lar",
            "Loni",
            "Lucknow",
            "Mathura",
            "Meerut",
            "Modinagar",
            "Moradabad",
            "Nagina",
            "Najibabad",
            "Nakur",
            "Nanpara",
            "Naraura",
            "Naugawan Sadat",
            "Nautanwa",
            "Nawabganj",
            "Nehtaur",
            "Niwai",
            "Noida",
            "Noorpur",
            "Obra",
            "Orai",
            "Padrauna",
            "Palia Kalan",
            "Parasi",
            "Phulpur",
            "Pihani",
            "Pilibhit",
            "Pilkhuwa",
            "Powayan",
            "Pukhrayan",
            "Puranpur",
            "Purquazi",
            "Purwa",
            "Rae Bareli",
            "Rampur",
            "Rampur Maniharan",
            "Rampur Maniharan",
            "Rasra",
            "Rath",
            "Renukoot",
            "Reoti",
            "Robertsganj",
            "Rudauli",
            "Rudrapur",
            "Sadabad",
            "Safipur",
            "Saharanpur",
            "Sahaspur",
            "Sahaswan",
            "Sahawar",
            "Sahjanwa",
            "Saidpur",
            "Sambhal",
            "Samdhan",
            "Samthar",
            "Sandi",
            "Sandila",
            "Sardhana",
            "Seohara",
            "Shahabad, Hardoi",
            "Shahabad, Rampur",
            "Shahganj",
            "Shahjahanpur",
            "Shamli",
            "Shamsabad, Agra",
            "Shamsabad, Farrukhabad",
            "Sherkot",
            "Shikarpur, Bulandshahr",
            "Shikohabad",
            "Shishgarh",
            "Siana",
            "Sikanderpur",
            "Sikandra Rao",
            "Sikandrabad",
            "Sirsaganj",
            "Sirsi",
            "Sitapur",
            "Soron",
            "Suar",
            "Sultanpur",
            "Sumerpur",
            "Tanda",
            "Thakurdwara",
            "Thana Bhawan",
            "Tilhar",
            "Tirwaganj",
            "Tulsipur",
            "Tundla",
            "Ujhani",
            "Unnao",
            "Utraula",
            "Varanasi",
            "Vrindavan",
            "Warhapur",
            "Zaidpur",
            "Zamania"
        ],
        "Uttarakhand": [
            "Bageshwar",
            "Dehradun",
            "Haldwani-cum-Kathgodam",
            "Hardwar",
            "Kashipur",
            "Manglaur",
            "Mussoorie",
            "Nagla",
            "Nainital",
            "Pauri",
            "Pithoragarh",
            "Ramnagar",
            "Rishikesh",
            "Roorkee",
            "Rudrapur",
            "Sitarganj",
            "Srinagar",
            "Tehri"
        ],
        "West Bengal": [
            "Adra",
            "Alipurduar",
            "Arambagh",
            "Asansol",
            "Baharampur",
            "Balurghat",
            "Bankura",
            "Darjiling",
            "English Bazar",
            "Gangarampur",
            "Habra",
            "Hugli-Chinsurah",
            "Jalpaiguri",
            "Jhargram",
            "Kalimpong",
            "Kharagpur",
            "Kolkata",
            "Mainaguri",
            "Malda",
            "Mathabhanga",
            "Medinipur",
            "Memari",
            "Monoharpur",
            "Murshidabad",
            "Nabadwip",
            "Naihati",
            "Panchla",
            "Pandua",
            "Paschim Punropara",
            "Purulia",
            "Raghunathpur",
            "Raghunathganj",
            "Raiganj",
            "Rampurhat",
            "Ranaghat",
            "Sainthia",
            "Santipur",
            "Siliguri",
            "Sonamukhi",
            "Srirampore",
            "Suri",
            "Taki",
            "Tamluk",
            "Tarakeswar"
        ]
    }

    let sectorData = {
        'Clean Cooking': ["Solar", "Electricity", "LPG and PNG", "Biomass and Firewood", "Biogas"],
        'Energy': ["Electricity", "Renewable Energy", "Solar Power", "Wind Power", "Thermal", "Hydro", "Hydrogen", "Bioenergy"],
        'Energy Storage': ["Battery", "Fuel Cell"],
        'Environment': ["Waste Management", "Indoor Air", "Outdoor Air", "Water", "Plastic Waste", "Municipality Waste"],
        'Mobility': ["Electric Vehicle", "Automobile", "Aviation", "Auto component"],
        'Digital Transformation': ["Data and Analytics", "Software", "Hardware", "IOT", "Blockchain", "Cloud Storage", "Cloud Computing", "Digital and Creative", "Cyber Security"],
        'Digital Communication': ["Networks", "5G", "6G", "SATCOM", "Device", "Semiconductor"],
        'Finance': ["Green Finance", "Project Finance", "Corporate Finance", "Equity", "Debt", "Hybrid", "Grant", "Blended Finance"],
        'Carbon Finance': [],
        'Water': ["Drinking Water", "Waste Water"],
        'Health': ["Biotech", "Medical Device", "Pharma"],
        'Food and Agri': ["Bamboo"],
        'Defence': [],
        'Infrastructure': [],
        'Advanced Manufacturing': []
    }
    const [subSecData, setSubSecData] = useState([])


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sal, setSal] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [mobile, setMobile] = useState('');
    const [tel, setTel] = useState('');
    const [designation, setDesignation] = useState('')
    const [organization, setOrganization] = useState('');
    const [organizationType, setOrganizationType] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [sector, setSector] = useState('')
    const [subSector, setSubSector] = useState('')
    const [subSectorL2, setSubSectorL2] = useState('')
    const [website, setWebsite] = useState('')
    const [organizationProfile, setOrganizationProfile] = useState('')
    const [remark1, setRemark1] = useState('')
    const [remark2, setRemark2] = useState('')
    const [remark3, setRemark3] = useState('')

    function getCurrentDate(separator = '-') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    }

    let date = getCurrentDate()

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = {
                "sal": sal,
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "secondEmail": email2,
                "phone": mobile,
                "tel": tel,
                "designation": designation,
                "organizationName": organization,
                "organizationType": organizationType,
                "sector": sector,
                "subSector": subSector,
                "subSector2": subSectorL2,
                "country": country,
                "state": state,
                "city": city,
                "website": website,
                "organizationProfile": organizationProfile,
                "remark1": remark1,
                "remark2": remark2,
                "remark3": remark3,
                "addedBy": 'finovista',
                "date": date,
                "status": 'active',
                "type": title
            }
            let res = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            let response = await res.json()
            if (response.success) {
                setShowModal(false);
                handleRegistor();
                setSal('')
                setFirstName('')
                setLastName('')
                setEmail('')
                setEmail2('')
                setMobile('')
                setTel('')
                setDesignation('')
                setOrganization('')
                setOrganizationType('')
                setSector('')
                setSubSector('')
                setSubSectorL2('')
                setCountry('')
                setState('')
                setCity('')
                setWebsite('')
                setOrganizationProfile('')
                setRemark1('')
                setRemark2('')
                setRemark3('')
                toast.success(`Congrats ${firstName} You Are Registered For Event`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        } catch (err) {
            toast.error('Please Try Again!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }

    };


    return (
        <div className='mb-44'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <div className='mt-44'>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none overflow-scroll"
                        >
                            <div className="relative w-auto my-6 h-[90vh] mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold text-black">
                                            Register For {name}
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-4xl leading-none font-semibold outline-none focus:outline-none cursor-pointer"
                                            onClick={() => {
                                                setShowModal(false)
                                                handleRegistor()
                                            }}
                                        >
                                            <span className="bg-transparent text-black opacity-50 -mt-1 h-4 w-12 text-4xl block outline-none focus:outline-none">
                                                ??
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto formElementsBody">
                                        <div>
                                            <section className="text-gray-600 body-font">
                                                <div className="container mx-auto">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="mx-auto">
                                                            <div className="">
                                                                <div className='grid grid-cols-2'>
                                                                    {form.sal ? (
                                                                        <div className="p-2">
                                                                            <div className="">
                                                                                <label className="leading-7 text-sm text-gray-600">Sal</label>
                                                                                <input onChange={(e) => setSal(e.target.value)} placeholder='Sal' value={sal} type="text" id="sal" name="sal" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.sal[form.sal.length - 1] == "*" ? true : false} />
                                                                            </div>
                                                                        </div>
                                                                    ) : null}
                                                                    {form.firstName ? (
                                                                        <div className="p-2">
                                                                            <div className="">
                                                                                <label className="leading-7 text-sm text-gray-600">First Name</label>
                                                                                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder='Enter First Name' type="text" id="firstName" name="firstName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.firstName[form.firstName.length - 1] == "*" ? true : false} />
                                                                            </div>
                                                                        </div>
                                                                    ) : null}
                                                                    {
                                                                        form.lastName ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Last Name</label>
                                                                                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder='Enter Last Name' type="text" id="lastName" name="lastName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.lastName[form.lastName.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.email ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Email</label>
                                                                                    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Email' type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.email[form.email.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.secondEmail ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Second Email</label>
                                                                                    <input onChange={(e) => setEmail2(e.target.value)} value={email2} placeholder='Enter Second Email' type="email" id="email2" name="email2" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.secondEmail[form.secondEmail.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.phone ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Mobile No.</label>
                                                                                    <input onChange={(e) => setMobile(e.target.value)} value={mobile} placeholder='Enter Phone No' type="number" id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.phone[form.phone.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null

                                                                    }
                                                                    {
                                                                        form.tel ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Landline No.</label>
                                                                                    <input onChange={(e) => setTel(e.target.value)} value={tel} placeholder='Landline No' type="number" id="tel" name="tel" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.tel[form.tel.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.country ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Country</label>
                                                                                    <select id="country" name="country" value={country} className="p-2 rounded-md border border-gray-300 w-full bg-transparent" onChange={(e) => {
                                                                                        setCountry(e.target.value)
                                                                                        if (e.target.value == 'India') {
                                                                                            setStateData(stateObj)
                                                                                        } else {
                                                                                            setStateData('')
                                                                                            setCityData()
                                                                                        }
                                                                                    }} required={form.country[form.country.length - 1] == "*" ? true : false}>
                                                                                        <option value="">Select Country</option>
                                                                                        <option value="Afghanistan">Afghanistan</option>
                                                                                        <option value="??land Islands">??land Islands</option>
                                                                                        <option value="Albania">Albania</option>
                                                                                        <option value="Algeria">Algeria</option>
                                                                                        <option value="American Samoa">American Samoa</option>
                                                                                        <option value="Andorra">Andorra</option>
                                                                                        <option value="Angola">Angola</option>
                                                                                        <option value="Anguilla">Anguilla</option>
                                                                                        <option value="Antarctica">Antarctica</option>
                                                                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                                        <option value="Argentina">Argentina</option>
                                                                                        <option value="Armenia">Armenia</option>
                                                                                        <option value="Aruba">Aruba</option>
                                                                                        <option value="Australia">Australia</option>
                                                                                        <option value="Austria">Austria</option>
                                                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                                                        <option value="Bahamas">Bahamas</option>
                                                                                        <option value="Bahrain">Bahrain</option>
                                                                                        <option value="Bangladesh">Bangladesh</option>
                                                                                        <option value="Barbados">Barbados</option>
                                                                                        <option value="Belarus">Belarus</option>
                                                                                        <option value="Belgium">Belgium</option>
                                                                                        <option value="Belize">Belize</option>
                                                                                        <option value="Benin">Benin</option>
                                                                                        <option value="Bermuda">Bermuda</option>
                                                                                        <option value="Bhutan">Bhutan</option>
                                                                                        <option value="Bolivia">Bolivia</option>
                                                                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                                        <option value="Botswana">Botswana</option>
                                                                                        <option value="Bouvet Island">Bouvet Island</option>
                                                                                        <option value="Brazil">Brazil</option>
                                                                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                                        <option value="Bulgaria">Bulgaria</option>
                                                                                        <option value="Burkina Faso">Burkina Faso</option>
                                                                                        <option value="Burundi">Burundi</option>
                                                                                        <option value="Cambodia">Cambodia</option>
                                                                                        <option value="Cameroon">Cameroon</option>
                                                                                        <option value="Canada">Canada</option>
                                                                                        <option value="Cape Verde">Cape Verde</option>
                                                                                        <option value="Cayman Islands">Cayman Islands</option>
                                                                                        <option value="Central African Republic">Central African Republic</option>
                                                                                        <option value="Chad">Chad</option>
                                                                                        <option value="Chile">Chile</option>
                                                                                        <option value="China">China</option>
                                                                                        <option value="Christmas Island">Christmas Island</option>
                                                                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                                                        <option value="Colombia">Colombia</option>
                                                                                        <option value="Comoros">Comoros</option>
                                                                                        <option value="Congo">Congo</option>
                                                                                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                                                                        <option value="Cook Islands">Cook Islands</option>
                                                                                        <option value="Costa Rica">Costa Rica</option>
                                                                                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                                                        <option value="Croatia">Croatia</option>
                                                                                        <option value="Cuba">Cuba</option>
                                                                                        <option value="Cyprus">Cyprus</option>
                                                                                        <option value="Czech Republic">Czech Republic</option>
                                                                                        <option value="Denmark">Denmark</option>
                                                                                        <option value="Djibouti">Djibouti</option>
                                                                                        <option value="Dominica">Dominica</option>
                                                                                        <option value="Dominican Republic">Dominican Republic</option>
                                                                                        <option value="Ecuador">Ecuador</option>
                                                                                        <option value="Egypt">Egypt</option>
                                                                                        <option value="El Salvador">El Salvador</option>
                                                                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                                        <option value="Eritrea">Eritrea</option>
                                                                                        <option value="Estonia">Estonia</option>
                                                                                        <option value="Ethiopia">Ethiopia</option>
                                                                                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                                                                        <option value="Faroe Islands">Faroe Islands</option>
                                                                                        <option value="Fiji">Fiji</option>
                                                                                        <option value="Finland">Finland</option>
                                                                                        <option value="France">France</option>
                                                                                        <option value="French Guiana">French Guiana</option>
                                                                                        <option value="French Polynesia">French Polynesia</option>
                                                                                        <option value="French Southern Territories">French Southern Territories</option>
                                                                                        <option value="Gabon">Gabon</option>
                                                                                        <option value="Gambia">Gambia</option>
                                                                                        <option value="Georgia">Georgia</option>
                                                                                        <option value="Germany">Germany</option>
                                                                                        <option value="Ghana">Ghana</option>
                                                                                        <option value="Gibraltar">Gibraltar</option>
                                                                                        <option value="Greece">Greece</option>
                                                                                        <option value="Greenland">Greenland</option>
                                                                                        <option value="Grenada">Grenada</option>
                                                                                        <option value="Guadeloupe">Guadeloupe</option>
                                                                                        <option value="Guam">Guam</option>
                                                                                        <option value="Guatemala">Guatemala</option>
                                                                                        <option value="Guernsey">Guernsey</option>
                                                                                        <option value="Guinea">Guinea</option>
                                                                                        <option value="Guinea-bissau">Guinea-bissau</option>
                                                                                        <option value="Guyana">Guyana</option>
                                                                                        <option value="Haiti">Haiti</option>
                                                                                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                                                                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                                                                        <option value="Honduras">Honduras</option>
                                                                                        <option value="Hong Kong">Hong Kong</option>
                                                                                        <option value="Hungary">Hungary</option>
                                                                                        <option value="Iceland">Iceland</option>
                                                                                        <option value="India">India</option>
                                                                                        <option value="Indonesia">Indonesia</option>
                                                                                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                                                                        <option value="Iraq">Iraq</option>
                                                                                        <option value="Ireland">Ireland</option>
                                                                                        <option value="Isle of Man">Isle of Man</option>
                                                                                        <option value="Israel">Israel</option>
                                                                                        <option value="Italy">Italy</option>
                                                                                        <option value="Jamaica">Jamaica</option>
                                                                                        <option value="Japan">Japan</option>
                                                                                        <option value="Jersey">Jersey</option>
                                                                                        <option value="Jordan">Jordan</option>
                                                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                                                        <option value="Kenya">Kenya</option>
                                                                                        <option value="Kiribati">Kiribati</option>
                                                                                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                                                                        <option value="Korea, Republic of">Korea, Republic of</option>
                                                                                        <option value="Kuwait">Kuwait</option>
                                                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                                                                        <option value="Latvia">Latvia</option>
                                                                                        <option value="Lebanon">Lebanon</option>
                                                                                        <option value="Lesotho">Lesotho</option>
                                                                                        <option value="Liberia">Liberia</option>
                                                                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                                                        <option value="Lithuania">Lithuania</option>
                                                                                        <option value="Luxembourg">Luxembourg</option>
                                                                                        <option value="Macao">Macao</option>
                                                                                        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                                                                        <option value="Madagascar">Madagascar</option>
                                                                                        <option value="Malawi">Malawi</option>
                                                                                        <option value="Malaysia">Malaysia</option>
                                                                                        <option value="Maldives">Maldives</option>
                                                                                        <option value="Mali">Mali</option>
                                                                                        <option value="Malta">Malta</option>
                                                                                        <option value="Marshall Islands">Marshall Islands</option>
                                                                                        <option value="Martinique">Martinique</option>
                                                                                        <option value="Mauritania">Mauritania</option>
                                                                                        <option value="Mauritius">Mauritius</option>
                                                                                        <option value="Mayotte">Mayotte</option>
                                                                                        <option value="Mexico">Mexico</option>
                                                                                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                                                                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                                                        <option value="Monaco">Monaco</option>
                                                                                        <option value="Mongolia">Mongolia</option>
                                                                                        <option value="Montenegro">Montenegro</option>
                                                                                        <option value="Montserrat">Montserrat</option>
                                                                                        <option value="Morocco">Morocco</option>
                                                                                        <option value="Mozambique">Mozambique</option>
                                                                                        <option value="Myanmar">Myanmar</option>
                                                                                        <option value="Namibia">Namibia</option>
                                                                                        <option value="Nauru">Nauru</option>
                                                                                        <option value="Nepal">Nepal</option>
                                                                                        <option value="Netherlands">Netherlands</option>
                                                                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                                                        <option value="New Caledonia">New Caledonia</option>
                                                                                        <option value="New Zealand">New Zealand</option>
                                                                                        <option value="Nicaragua">Nicaragua</option>
                                                                                        <option value="Niger">Niger</option>
                                                                                        <option value="Nigeria">Nigeria</option>
                                                                                        <option value="Niue">Niue</option>
                                                                                        <option value="Norfolk Island">Norfolk Island</option>
                                                                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                                                        <option value="Norway">Norway</option>
                                                                                        <option value="Oman">Oman</option>
                                                                                        <option value="Pakistan">Pakistan</option>
                                                                                        <option value="Palau">Palau</option>
                                                                                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                                                                        <option value="Panama">Panama</option>
                                                                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                                                                        <option value="Paraguay">Paraguay</option>
                                                                                        <option value="Peru">Peru</option>
                                                                                        <option value="Philippines">Philippines</option>
                                                                                        <option value="Pitcairn">Pitcairn</option>
                                                                                        <option value="Poland">Poland</option>
                                                                                        <option value="Portugal">Portugal</option>
                                                                                        <option value="Puerto Rico">Puerto Rico</option>
                                                                                        <option value="Qatar">Qatar</option>
                                                                                        <option value="Reunion">Reunion</option>
                                                                                        <option value="Romania">Romania</option>
                                                                                        <option value="Russian Federation">Russian Federation</option>
                                                                                        <option value="Rwanda">Rwanda</option>
                                                                                        <option value="Saint Helena">Saint Helena</option>
                                                                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                                                        <option value="Saint Lucia">Saint Lucia</option>
                                                                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                                                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                                                                        <option value="Samoa">Samoa</option>
                                                                                        <option value="San Marino">San Marino</option>
                                                                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                                                                        <option value="Senegal">Senegal</option>
                                                                                        <option value="Serbia">Serbia</option>
                                                                                        <option value="Seychelles">Seychelles</option>
                                                                                        <option value="Sierra Leone">Sierra Leone</option>
                                                                                        <option value="Singapore">Singapore</option>
                                                                                        <option value="Slovakia">Slovakia</option>
                                                                                        <option value="Slovenia">Slovenia</option>
                                                                                        <option value="Solomon Islands">Solomon Islands</option>
                                                                                        <option value="Somalia">Somalia</option>
                                                                                        <option value="South Africa">South Africa</option>
                                                                                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                                                                        <option value="Spain">Spain</option>
                                                                                        <option value="Sri Lanka">Sri Lanka</option>
                                                                                        <option value="Sudan">Sudan</option>
                                                                                        <option value="Suriname">Suriname</option>
                                                                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                                                        <option value="Swaziland">Swaziland</option>
                                                                                        <option value="Sweden">Sweden</option>
                                                                                        <option value="Switzerland">Switzerland</option>
                                                                                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                                                        <option value="Taiwan">Taiwan</option>
                                                                                        <option value="Tajikistan">Tajikistan</option>
                                                                                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                                                                        <option value="Thailand">Thailand</option>
                                                                                        <option value="Timor-leste">Timor-leste</option>
                                                                                        <option value="Togo">Togo</option>
                                                                                        <option value="Tokelau">Tokelau</option>
                                                                                        <option value="Tonga">Tonga</option>
                                                                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                                                        <option value="Tunisia">Tunisia</option>
                                                                                        <option value="Turkey">Turkey</option>
                                                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                                                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                                                        <option value="Tuvalu">Tuvalu</option>
                                                                                        <option value="Uganda">Uganda</option>
                                                                                        <option value="Ukraine">Ukraine</option>
                                                                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                                                                        <option value="United Kingdom">United Kingdom</option>
                                                                                        <option value="United States">United States</option>
                                                                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                                                        <option value="Uruguay">Uruguay</option>
                                                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                                                        <option value="Vanuatu">Vanuatu</option>
                                                                                        <option value="Venezuela">Venezuela</option>
                                                                                        <option value="Viet Nam">Viet Nam</option>
                                                                                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                                                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                                                        <option value="Western Sahara">Western Sahara</option>
                                                                                        <option value="Yemen">Yemen</option>
                                                                                        <option value="Zambia">Zambia</option>
                                                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.state ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">State</label>
                                                                                    <select name="state" id="state" value={state} className="p-2 rounded-md border border-gray-300 w-full bg-transparent" onChange={(e) => {
                                                                                        setState(e.target.value)
                                                                                        setCityData(stateData[e.target.value])
                                                                                    }} required={form.state[form.state.length - 1] == "*" ? true : false}>
                                                                                        <option value="">Select State</option>
                                                                                        {Object.entries(stateData).map((stateName, k) => <option key={k} value={stateName[0]}>{stateName[0]}</option>)}
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.city ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">City</label>
                                                                                    <select name="state" id="state" value={city} className="p-2 rounded-md border border-gray-300 w-full bg-transparent" onChange={(e) => setCity(e.target.value)} required={form.city[form.state.length - 1] == "*" ? true : false}>
                                                                                        <option value="">Select City</option>
                                                                                        {cityData.map((cityName, k) => { return <option key={k} value={cityName}>{cityName}</option> })}
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.designation ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Designation</label>
                                                                                    <input onChange={(e) => setDesignation(e.target.value)} value={designation} placeholder='Designation' type="text" id="deg" name="deg" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.designation[form.designation.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.organizationName ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Organization Name</label>
                                                                                    <input onChange={(e) => setOrganization(e.target.value)} value={organization} placeholder='Organisation Name' type="text" id="org" name="org" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.organizationName[form.organizationName.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.organizationType ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Organization Type</label>
                                                                                    <select name="" id="orgType" className='p-2 rounded-md border border-gray-300 w-full bg-transparent' value={organizationType} onChange={(e) => { setOrganizationType(e.target.value) }} required={form.organizationType[form.organizationType.length - 1] == "*" ? true : false}>
                                                                                        <option value="">Organization Type</option>
                                                                                        <option value="Innovator">Innovator</option>
                                                                                        <option value="Startup and SME">Startup and SME</option>
                                                                                        <option value="Large Company">Large Company</option>
                                                                                        <option value="NGO">NGO</option>
                                                                                        <option value="Academia">Academia</option>
                                                                                        <option value="Goverment">Goverment</option>
                                                                                        <option value="Development Agency">Development Agency</option>
                                                                                        <option value="Industry Association">Industry Association</option>
                                                                                        <option value="Corporate Foundation">Corporate Foundation</option>
                                                                                        <option value="Consultancy Services">Consultancy Services</option>

                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.organizationProfile ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Organization Profile</label>
                                                                                    <input onChange={(e) => setOrganizationProfile(e.target.value)} value={organizationProfile} placeholder='Organisation Profile' type="text" id="orgProfile" name="orgProfile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.organizationProfile[form.organizationProfile.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.sector ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Sector</label>
                                                                                    <select name="" id="sector" value={sector} className='p-2 rounded-md border border-gray-300 w-full bg-transparent' onChange={(e) => { setSector(e.target.value); setSubSecData(sectorData[e.target.value]); }} required={form.sector[form.sector.length - 1] == "*" ? true : false}>
                                                                                        <option value="">Select Sector</option>
                                                                                        {Object.entries(sectorData).map((stateName, k) => <option key={k} value={stateName[0]}>{stateName[0]}</option>)}
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.subSector ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Sub Sector</label>
                                                                                    <select name="" value={subSector} id="subSector" className='p-2 rounded-md border border-gray-300 w-full bg-transparent' onChange={(e) => { setSubSector(e.target.value); }} required={form.subSector[form.subSector.length - 1] == "*" ? true : false}>
                                                                                        <option value="">Select SubSector</option>
                                                                                        {subSecData.map((cityName, k) => { return <option key={k} value={cityName}>{cityName}</option> })}
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.subSector2 ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Sub Sector L2</label>
                                                                                    <input value={subSectorL2} placeholder='Enter Sub Sector L2' onChange={(e) => setSubSectorL2(e.target.value)} type="text" id="subSector2" name="subSector2" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.subSector2[form.subSector2.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.website ? (
                                                                            <div className='grid'>
                                                                                <div className="p-2">
                                                                                    <div className="">
                                                                                        <label className="leading-7 text-sm text-gray-600">Website</label>
                                                                                        <input value={website} placeholder='Enter Website Link' onChange={(e) => setWebsite(e.target.value)} type="text" id="website" name="website" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  required={form.website[form.website.length - 1] == "*" ? true : false} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.remark1 ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Remark1</label>
                                                                                    <input value={remark1} placeholder='Remark 1' onChange={(e) => setRemark1(e.target.value)} type="text" id="remark1" name="remark1" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  required={form.remark1[form.remark1.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.remark2 ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Remark2</label>
                                                                                    <input value={remark2} placeholder='Remark 2' onChange={(e) => setRemark2(e.target.value)} type="text" id="remark2" name="remark2" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.remark2[form.remark2.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        form.remark3 ? (
                                                                            <div className="p-2">
                                                                                <div className="">
                                                                                    <label className="leading-7 text-sm text-gray-600">Remark3</label>
                                                                                    <input value={remark3} placeholder='Remark 3' onChange={(e) => setRemark3(e.target.value)} type="text" id="remark3" name="remark3" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required={form.remark3[form.remark3.length - 1] == "*" ? true : false} />
                                                                                </div>
                                                                            </div>
                                                                        ) : null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-center p-6 border-t  border-slate-200 rounded-b">
                                                            <button
                                                                className="bg-emerald-500 text-white active:bg-emerald-600 border-none font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 -mb-2 ease-linear transition-all duration-150"
                                                                type="submit">
                                                                Register Now
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default FormElements