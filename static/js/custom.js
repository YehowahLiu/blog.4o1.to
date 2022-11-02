/* 站点运行时间 */
function runtime() {
	window.setTimeout("runtime()", 1000);
	/* 请修改这里的起始时间 */
    let startTime = new Date('01/03/2022 16:52:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '<i class="fas fa-cog fa-spin fa-fw"></i>本站已运行 <i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 天 '
        + ((hours < 10) ? '0' : '') + hours + ' 时 '
        + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
        + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
}

/* cdn节点信息 */
function checkcdn(){
    let areas = {
        'TNR': 'Antananarivo, 🇲🇬 Madagascar',
        'CPT': 'Cape Town, 🇿🇦 South Africa',
        'CMN': 'Casablanca, 🇲🇦 Morocco',
        'DAR': 'Dar Es Salaam, 🇹🇿 Tanzania',
        'JIB': 'Djibouti City, 🇩🇯 Djibouti',
        'DUR': 'Durban, 🇿🇦 South Africa',
        'JNB': 'Johannesburg, 🇿🇦 South Africa',
        'KGL': 'Kigali, 🇷🇼 Rwanda',
        'LOS': 'Lagos, 🇳🇬 Nigeria',
        'LAD': 'Luanda, Angola',
        'MPM': 'Maputo, MZ',
        'MBA': 'Mombasa, Kenya',
        'MRU': 'Port Louis, Mauritius',
        'RUN': 'Réunion, France',
        'BLR': 'Bangalore, 🇮🇳 India',
        'BKK': 'Bangkok, Thailand',
        'BWN': 'Bandar Seri Begawan, Brunei',
        'CEB': 'Cebu, Philippines',
        'CTU': '成都, 🇨🇳 中国大陆',
        'MAA': 'Chennai, 🇮🇳 India',
        'CGP': 'Chittagong, Bangladesh',
        'CKG': '重庆, 🇨🇳 中国大陆',
        'CMB': 'Colombo, Sri Lanka',
        'DAC': 'Dhaka, Bangladesh',
        'SZX': '东莞, 🇨🇳 中国大陆',
        'FUO': '佛山, 🇨🇳 中国大陆',
        'FOC': '福州, 🇨🇳 中国大陆',
        'CAN': '广州, 🇨🇳 中国大陆',
        'HGH': '杭州, 🇨🇳 中国大陆',
        'HAN': 'Hanoi, Vietnam',
        'HNY': '衡阳, 🇨🇳 中国大陆',
        'SGN': 'Ho Chi Minh City, Vietnam',
        'HKG': '🇭🇰 香港',
        'HYD': 'Hyderabad, 🇮🇳 India',
        'ISB': 'Islamabad, Pakistan',
        'CGK': 'Jakarta, Indonesia',
        'TNA': '济南, 🇨🇳 中国大陆',
        'KHI': 'Karachi, Pakistan',
        'KTM': 'Kathmandu, Nepal',
        'CCU': 'Kolkata, 🇮🇳 India',
        'KUL': 'Kuala Lumpur, Malaysia',
        'LHE': 'Lahore, Pakistan',
        'NAY': '廊坊, 🇨🇳 中国大陆',
        'LYA': '洛阳, 🇨🇳 中国大陆',
        'MFM': '🇲🇴 澳门',
        'MLE': 'Malé, Maldives',
        'MNL': 'Manila, Philippines',
        'BOM': 'Mumbai, 🇮🇳 India',
        'NAG': 'Nagpur, 🇮🇳 India',
        'NNG': '南宁, 🇨🇳 中国大陆',
        'DEL': 'New Delhi, 🇮🇳 India',
        'KIX': 'Osaka, Japan',
        'PNH': 'Phnom Penh, Cambodia',
        'TAO': '青岛, 🇨🇳 中国大陆',
        'ICN': 'Seoul, South Korea',
        'SHA': '上海, 🇨🇳 中国大陆',
        'SHE': '沈阳, 🇨🇳 中国大陆',
        'SJW': '石家庄, 🇨🇳 中国大陆',
        'SIN': 'Singapore, Singapore',
        'SZV': '苏州, 🇨🇳 中国大陆',
        'TPE': '台北, 🇨🇳 台湾',
        'PBH': 'Thimphu, Bhutan',
        'TSN': '天津, 🇨🇳 中国大陆',
        'NRT': 'Tokyo, Japan',
        'ULN': 'Ulaanbaatar, Mongolia',
        'VTE': 'Vientiane, Laos',
        'WUH': '武汉, 🇨🇳 中国大陆',
        'WUX': '无锡, 🇨🇳 中国大陆',
        'XIY': '西安, 🇨🇳 中国大陆',
        'EVN': 'Yerevan, Armenia',
        'CGO': '郑州, 🇨🇳 中国大陆',
        'CSX': '株洲, 🇨🇳 中国大陆',
        'AMS': 'Amsterdam, Netherlands',
        'ATH': 'Athens, Greece',
        'BCN': 'Barcelona, Spain',
        'BEG': 'Belgrade, Serbia',
        'TXL': 'Berlin, 🇩🇪 Germany',
        'BRU': 'Brussels, Belgium',
        'OTP': 'Bucharest, Romania',
        'BUD': 'Budapest, Hungary',
        'KIV': 'Chișinău, Moldova',
        'CPH': 'Copenhagen, Denmark',
        'ORK': 'Cork, Ireland',
        'DUB': 'Dublin, Ireland',
        'DUS': 'Düsseldorf, 🇩🇪 Germany',
        'EDI': 'Edinburgh, 🇬🇧 United Kingdom',
        'FRA': 'Frankfurt, 🇩🇪 Germany',
        'GVA': 'Geneva, Switzerland',
        'GOT': 'Gothenburg, Sweden',
        'HAM': 'Hamburg, 🇩🇪 Germany',
        'HEL': 'Helsinki, Finland',
        'IST': 'Istanbul, Turkey',
        'KBP': 'Kyiv, Ukraine',
        'LIS': 'Lisbon, Portugal',
        'LHR': 'London, 🇬🇧 United Kingdom',
        'LUX': 'Luxembourg City, Luxembourg',
        'MAD': 'Madrid, Spain',
        'MAN': 'Manchester, 🇬🇧 United Kingdom',
        'MRS': 'Marseille, France',
        'MXP': 'Milan, Italy',
        'DME': 'Moscow, Russia',
        'MUC': 'Munich, 🇩🇪 Germany',
        'LCA': 'Nicosia, Cyprus',
        'OSL': 'Oslo, Norway',
        'CDG': 'Paris, France',
        'PRG': 'Prague, Czech Republic',
        'KEF': 'Reykjavík, Iceland',
        'RIX': 'Riga, Latvia',
        'FCO': 'Rome, Italy',
        'LED': 'Saint Petersburg, Russia',
        'SOF': 'Sofia, Bulgaria',
        'ARN': 'Stockholm, Sweden',
        'TLL': 'Tallinn, Estonia',
        'SKG': 'Thessaloniki, Greece',
        'VIE': 'Vienna, Austria',
        'VNO': 'Vilnius, Lithuania',
        'WAW': 'Warsaw, Poland',
        'ZAG': 'Zagreb, Croatia',
        'ZRH': 'Zürich, Switzerland',
        'ARI': 'Arica, Chile',
        'ASU': 'Asunción, Paraguay',
        'BOG': 'Bogotá, Colombia',
        'EZE': 'Buenos Aires, Argentina',
        'CWB': 'Curitiba, Brazil',
        'FOR': 'Fortaleza, Brazil',
        'GUA': 'Guatemala City, Guatemala',
        'LIM': 'Lima, Peru',
        'MDE': 'Medellín, Colombia',
        'PTY': 'Panama City, Panama',
        'POA': 'Porto Alegre, Brazil',
        'UIO': 'Quito, Ecuador',
        'GIG': 'Rio de Janeiro, Brazil',
        'GRU': 'São Paulo, Brazil',
        'SCL': 'Santiago, Chile',
        'CUR': 'Willemstad, Curaçao',
        'GND': 'St. George‘s, Grenada',
        'AMM': 'Amman, Jordan',
        'BGW': 'Baghdad, Iraq',
        'GYD': 'Baku, Azerbaijan',
        'BEY': 'Beirut, Lebanon',
        'DOH': 'Doha, Qatar',
        'DXB': 'Dubai, United Arab Emirates',
        'KWI': 'Kuwait City, Kuwait',
        'BAH': 'Manama, Bahrain',
        'MCT': 'Muscat, Oman',
        'ZDM': 'Ramallah',
        'RUH': 'Riyadh, Saudi Arabia',
        'TLV': 'Tel Aviv, Israel',
        'IAD': 'Ashburn, VA, 🇺🇸 United States',
        'ATL': 'Atlanta, GA, 🇺🇸 United States',
        'BOS': 'Boston, MA, 🇺🇸 United States',
        'BUF': 'Buffalo, NY, 🇺🇸 United States',
        'YYC': 'Calgary, AB, 🇨🇦 Canada',
        'CLT': 'Charlotte, NC, 🇺🇸 United States',
        'ORD': 'Chicago, IL, 🇺🇸 United States',
        'CMH': 'Columbus, OH, 🇺🇸 United States',
        'DFW': 'Dallas, TX, 🇺🇸 United States',
        'DEN': 'Denver, CO, 🇺🇸 United States',
        'DTW': 'Detroit, MI, 🇺🇸 United States',
        'HNL': 'Honolulu, HI, 🇺🇸 United States',
        'IAH': 'Houston, TX, 🇺🇸 United States',
        'IND': 'Indianapolis, IN, 🇺🇸 United States',
        'JAX': 'Jacksonville, FL, 🇺🇸 United States',
        'MCI': 'Kansas City, MO, 🇺🇸 United States',
        'LAS': 'Las Vegas, NV, 🇺🇸 United States',
        'LAX': 'Los Angeles, CA, 🇺🇸 United States',
        'MFE': 'McAllen, TX, 🇺🇸 United States',
        'MEM': 'Memphis, TN, 🇺🇸 United States',
        'MEX': 'Mexico City, 🇲🇽 Mexico',
        'MIA': 'Miami, FL, 🇺🇸 United States',
        'MSP': 'Minneapolis, MN, 🇺🇸 United States',
        'MGM': 'Montgomery, AL, 🇺🇸 United States',
        'YUL': 'Montréal, QC, 🇨🇦 Canada',
        'BNA': 'Nashville, TN, 🇺🇸 United States',
        'EWR': 'Newark, NJ, 🇺🇸 United States',
        'ORF': 'Norfolk, VA, 🇺🇸 United States',
        'OMA': 'Omaha, NE, 🇺🇸 United States',
        'PHL': 'Philadelphia, 🇺🇸 United States',
        'PHX': 'Phoenix, AZ, 🇺🇸 United States',
        'PIT': 'Pittsburgh, PA, 🇺🇸 United States',
        'PAP': 'Port-Au-Prince, Haiti',
        'PDX': 'Portland, OR, 🇺🇸 United States',
        'QRO': 'Queretaro, MX, 🇲🇽 Mexico',
        'RIC': 'Richmond, Virginia',
        'SMF': 'Sacramento, CA, 🇺🇸 United States',
        'SLC': 'Salt Lake City, UT, 🇺🇸 United States',
        'SAN': 'San Diego, CA, 🇺🇸 United States',
        'SJC': 'San Jose, CA, 🇺🇸 United States',
        'YXE': 'Saskatoon, SK, 🇨🇦 Canada',
        'SEA': 'Seattle, WA, 🇺🇸 United States',
        'STL': 'St. Louis, MO, 🇺🇸 United States',
        'TPA': 'Tampa, FL, 🇺🇸 United States',
        'YYZ': 'Toronto, ON, 🇨🇦 Canada',
        'YVR': 'Vancouver, BC, 🇨🇦 Canada',
        'TLH': 'Tallahassee, FL, 🇺🇸 United States',
        'YWG': 'Winnipeg, MB, 🇨🇦 Canada',
        'ADL': 'Adelaide, SA, 🇦🇺 Australia',
        'AKL': 'Auckland, New Zealand',
        'BNE': 'Brisbane, QLD, 🇦🇺 Australia',
        'MEL': 'Melbourne, VIC, 🇦🇺 Australia',
        'NOU': 'Noumea, New caledonia',
        'PER': 'Perth, WA, 🇦🇺 Australia',
        'SYD': 'Sydney, NSW, 🇦🇺 Australia'
    };
    let text = '<object data="cloudflare.svg" type="image/svg+xml"></object> CDN节点 ';
    let cdnelement = document.getElementById("cdn-info");
    cdnelement.innerHTML = text + '未知';
    $(document).ready(
        $.ajax({
            url: "/cdn-cgi/trace",
            success: function (data, status) {
                
                let area = data.split("colo=")[1].split("\n")[0];
                if(areas[area]){
                    cdnelement.innerHTML = text + areas[area];
                }else{
                    cdnelement.innerHTML = text + area;
                }
            },
            error: function(){
                cdnelement.innerHTML = text + '未知';
            }
        }
        )
    );
}

Sakana.init({
    el:         '.sakana-box',     // 启动元素 node 或 选择器
    scale:      .5,                // 缩放倍数
    canSwitchCharacter: true,      // 允许换角色
});
Sakana.setMute(false);

checkcdn();
runtime();

document.getElementById("uvinfo").innerHTML = '<i class="fa fa-eye"></i><span id="busuanzi_value_site_pv"></span> 次 | <i class="fa fa-user"></i><span id="busuanzi_value_site_uv"></span> 人';
