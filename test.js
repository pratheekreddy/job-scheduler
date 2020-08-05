// var dates = ['1/2/12','15/5/12'];
// var result = dates.map(d => `'${d}'`).join(',');
// console.log(result);
// var uuid=require('uuid')
// let a=['a,b,c,d','e,f,g,h']
// let b=[]
// for(let i=0;i<a.length;i++){
//     b[i]=a[i].split(',')
//     b[i].push('uuid')
//     b[i].push('domain')
// }
// console.log(b)
// console.log(Date.now())


// let a={a:'a',b:'b',d:'d'}
// let m=[]
// console.log(m.push(a.c))
// m.push(5)
// console.log(m)
// let a='a'
// for(let i=0;i<10;i++){
//     console.log(a)
//     a++
// }
// let col=['A','B']
// let temp=col[i]
// let json={"A": "Tag Name( up to 8 tags)",
// "B": "Tag Domain"}
// console.log(json.temp)

// let a=Date.now()
// console.log(new Date(1596106923))
/*
let json2array=function (json){
	let col=['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];
	let value=[];
	for(let i=0;i<json.length;i++){
		let row=[];
		for(let j=0;j<14;j++){
            let temp=col[i]
			row.push(json.temp);
		}
		value.push(row);
    }
    console.log(value)
};

let json=[
    {
        "A": "Tag Name( up to 8 tags)",
        "B": "Tag Domain",
        "C": "Package",
        "D": "Function Group",
        "E": "System ID",
        "F": "Module",
        "G": "Sub Module",
        "H": "Object Type",
        "I": "Object Name",
        "J": "Detailed Description of Object",
        "K": "Reuse Percentage (How much of the solution is reusable)",
        "L": "RBEI Contact",
        "M": "Supporting Group",
        "N": "URL (If uploaded in FTP / Portal)"
    },
    {
        "A": "Length : String (500)  (In Total)",
        "B": "String(1)",
        "C": "String(50)",
        "D": "String(50)",
        "E": "String(6)",
        "F": "String(5)",
        "G": "String(15)",
        "H": "String(4)",
        "I": "String(50)",
        "J": "String(200)",
        "K": "DEC(3)",
        "L": "String(50)",
        "M": "String(10)",
        "N": "String(100)"
    },
    {
        "A": "eg: Migration,BBM , Templates, Cutover, Upload Program,FI",
        "B": "M' --> Migration / 'D'-->Development",
        "C": "<If applicable>",
        "D": "<If applicable>",
        "E": "Specific System / Line",
        "F": "SD/MM/FI",
        "G": "SD / Order / Invoice / Procurement",
        "H": "Templates (TMPL) / Program (REPS)  / LSMW / FUNC / CLAS",
        "I": "for LSMW cases : Project / Subproject / Object",
        "J": "< Please provide the reason for usage>",
        "K": "100 / 50 / 20",
        "L": "<RBEI Contact NT ID> eg : SSV2COB",
        "M": "<Supporting Group> eg : BSL3",
        "N": "<FTP / Portal URL If any>"
    },
    {
        "A": "eg : <Module>, <SubModule>, Tag 3, Tag 4"
    },
    {
        "A": "SD, Delivery, Details",
        "B": "D",
        "C": "N/A",
        "D": "N/A",
        "E": "A36",
        "F": "SD",
        "G": "Delivery",
        "H": "FUNC",
        "I": "/RB04/YP3_SD_DELIVERY_VIEW",
        "J": "dummy discription",
        "K": 96,
        "L": "N/A",
        "M": "N/A",
        "N": "N/A"
    },
    {
        "A": "Sales,Open Quantity, Schedule Lines",
        "B": "D",
        "C": "/RBR1/D_SD_FILLDM",
        "D": "/RBR1/D_0448_SD_OI_DM",
        "E": "A36",
        "F": "SD",
        "G": "Orders",
        "H": "FUNC",
        "I": "/RB04/YP3_VBOFM_GET",
        "J": "dummy discription",
        "K": 96,
        "L": "SNM4COB",
        "M": "BSL1",
        "N": "http://abc.com"
    },
    {
        "A": "Delivery, Delivered Quantity",
        "B": "D",
        "C": "/RB04/YP3_DELIVERY",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "SD",
        "G": "Delivery",
        "H": "FUNC",
        "I": "/RB04/YP3_GET_QUANTITY",
        "J": "dummy discription",
        "K": 96,
        "L": "SOA8FE",
        "M": "BST3",
        "N": "http://abc.com"
    },
    {
        "A": "SD, Delivery, Transport , Status",
        "B": "D",
        "C": "/RB04/YP3_TRANSPORT",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "SD",
        "G": "Delivery",
        "H": "FUNC",
        "I": "/RB04/YP3_CREATE_TRANSPORT",
        "J": "dummy discription",
        "K": 96,
        "L": "SOA8FE",
        "M": "BST3",
        "N": "http://abc.com"
    },
    {
        "A": "SD,Delivery",
        "B": "D",
        "C": "/RB04/YP3_TRANSPORT",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "SD",
        "G": "Delivery",
        "H": "FUNC",
        "I": "/RB04/YP3_CREATE_DEL_SAMMEL",
        "J": "dummy discription",
        "K": 96,
        "L": "SOA8FE",
        "M": "BST3",
        "N": "http://abc.com"
    },
    {
        "A": "SD,Delivery,BDC,VL01N",
        "B": "D",
        "C": "/RB04/YP3_VL01_USEREXIT",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "SD",
        "G": "Delivery",
        "H": "FUNC",
        "I": "/RB04/YP3_CREATE_DEL_VL01N",
        "J": "dummy discription",
        "K": 96,
        "L": "HAN8FE",
        "M": "BSL7",
        "N": "http://abc.com"
    },
    {
        "A": "SD, Delivery, Transport, Block, GTS",
        "B": "D",
        "C": "/RB04/YP3_VL01_USEREXIT",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "SD",
        "G": "Delivery",
        "H": "FUNC",
        "I": "/RB04/YP3_TRANSP_GTS_CHECK",
        "J": "dummy discription",
        "K": 96,
        "L": "HAN8FE",
        "M": "BST3",
        "N": "http://abc.com"
    },
    {
        "A": "Sales,Open",
        "B": "M",
        "C": "/RBR1/D_SD_FILLDM",
        "D": "/RBR1/D_0448_SD_OI_DM",
        "E": "A36",
        "F": "SD",
        "G": "Orders",
        "H": "FUNC",
        "I": "/RB04/YP3_INTBUK_BEDARF",
        "J": "dummy discription",
        "K": 96,
        "L": "SNM4COB",
        "M": "BSL1",
        "N": "http://abc.com"
    },
    {
        "A": "Quantity, Company Code",
        "B": "M",
        "C": "/RBR1/D_SD_FILLDM",
        "D": "/RBR1/D_0448_SD_OI_DM",
        "E": "A36",
        "F": "SD",
        "G": "Orders",
        "H": "FUNC",
        "I": "/RB04/YP3_FILL_SD_REL",
        "J": "dummy discription",
        "K": 96,
        "L": "SNM4COB",
        "M": "BSL2",
        "N": "http://abc.com"
    },
    {
        "A": "Sales,Quantity,Deliveries, Schedule Lines",
        "B": "M",
        "C": "/RB04/YP3_DELIVERY",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "SD",
        "G": "Orders",
        "H": "FUNC",
        "I": "/RB04/YP3_PARTNER_GET_DOC",
        "J": "dummy discription",
        "K": 96,
        "L": "SOA8FE",
        "M": "BST3",
        "N": "http://abc.com"
    },
    {
        "A": "Orders,Partners, Header, Item",
        "B": "M",
        "C": "/RB04/YP3_TRANSPORT",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "NA",
        "G": "NA",
        "H": "FUNC",
        "I": "/RB04/YP3_GET_EMAIL_ADDRESS",
        "J": "dummy discription",
        "K": 96,
        "L": "SOA8FE",
        "M": "BSL1",
        "N": "http://abc.com"
    },
    {
        "A": "Email, Username",
        "B": "M",
        "C": "/RB04/YP3_TRANSPORT",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "NA",
        "G": "NA",
        "H": "FUNC",
        "I": "/RB04/YP3_STRUCTURE_TO_STRING",
        "J": "dummy discription",
        "K": 96,
        "L": "SOA8FE",
        "M": "BSL1",
        "N": "http://abc.com"
    },
    {
        "A": "String, Conversion",
        "B": "M",
        "C": "/RB04/YP3_TRANSPORT",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "SD",
        "G": "Delivery",
        "H": "FUNC",
        "I": "/RB04/YP3_TRANSP_ST_ABFERTIG",
        "J": "dummy discription",
        "K": 96,
        "L": "SOA8FE",
        "M": "BSL2",
        "N": "http://abc.com"
    },
    {
        "A": "SD, Delivery, Transport , Status",
        "B": "M",
        "C": "/RB04/YP3_TRANSPORT",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "SD",
        "G": "Delivery",
        "H": "FUNC",
        "I": "/RB04/YP3_TRANSP_SET_STATUS",
        "J": "dummy discription",
        "K": 96,
        "L": "SOA8FE",
        "M": "BST3",
        "N": "http://abc.com"
    },
    {
        "A": "SD, Delivery, Transport , Status",
        "B": "M",
        "C": "/RB04/YP3_VBRK",
        "D": "/RB04/YP3_FAKTURA",
        "E": "A36",
        "F": "SD",
        "G": "Delivery",
        "H": "FUNC",
        "I": "/RB04/YP3_DETERMINE_AES_FLAG",
        "J": "dummy discription",
        "K": 96,
        "L": "BDW8FE",
        "M": "BST8",
        "N": "http://abc.com"
    },
    {
        "A": "SD, Delivery, AES",
        "B": "M",
        "C": "/RB04/YP3_HUM",
        "D": "/RB04/YP3_VERSAND",
        "E": "A36",
        "F": "SD",
        "G": "Invoice",
        "H": "FUNC",
        "I": "/RB04/YP3_BAPI_BILLINGDOC_CREA",
        "J": "dummy discription",
        "K": 96,
        "L": "RAT8FE",
        "M": "BSF4",
        "N": "http://abc.com"
    },
    {
        "A": "SD, Invoice , Create",
        "B": "M",
        "C": "N/A",
        "D": "N/A",
        "E": "A36",
        "F": "MM",
        "G": "MATERIAL",
        "H": "FUNC",
        "I": "AES_FLAG",
        "J": "dummy discription",
        "K": 96,
        "L": "N/A",
        "M": "N/A",
        "N": "N/A"
    },
    {
        "A": "MM,material",
        "B": "D",
        "C": "N/A",
        "D": "N/A",
        "E": "A36",
        "F": "MM",
        "G": "MATERIAL",
        "H": "FUNC",
        "I": "/RBEI/YP3_BAPI_BILLINGDOC-CRE",
        "J": "dummy discription",
        "K": 96,
        "L": "N/A",
        "M": "N/A",
        "N": "N/A"
    }
]
json2array(json)
*/
