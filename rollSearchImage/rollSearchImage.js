let roll=document.getElementById("roll");
let mainComp=document.getElementById("mainComp");

// data is a array to store details about the Friends
let data=[
    {roll:2844,name:"Friend 1 Name",imgSrc:"https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-6/438086334_1502868017306061_4435952994034482363_n.jpg?_nc_cat=106&_nc_cb=99be929b-713f6db7&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDVe2Gl9c9jVMdv7ZbJd4ks23BM4bqjouzbcEzhuqOi6zluVgfelrwyA5k2cOZIfb0pHn-ExPV9ygrtEmDUNkY&_nc_ohc=JXbzKk6CF8AQ7kNvgHz3T5U&_nc_ht=scontent.fisb13-1.fna&oh=00_AfAOyRXckVyepbA7UkSC6WZKAmWh3r0t5G0xlqXoavjRfQ&oe=6641CF0B",desc:"detail about Friend"},
    {roll:2862,name:"Friend 2 Name",imgSrc:"https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-6/430333801_3761943964084919_6534633713524124644_n.jpg?_nc_cat=108&_nc_cb=99be929b-713f6db7&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfnXpe7b2BpmhN6xSGgyhCD7WuyMxPk0oPta7IzE-TSoYNNTBDhSvIVnz7RImv-p6YwojfVY6nj0j4Oye6Lj4n&_nc_ohc=_Y0zoWBXWNIQ7kNvgFm5BKO&_nc_ht=scontent.fisb13-1.fna&oh=00_AfDlGb9Z5jFND5W8_COcvjxRjeuSecqzyyasFnwM8J3W4Q&oe=6641A4A7",desc:"detail about Friend"},
    {roll:2899,name:"Friend 3 Name",imgSrc:"https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-6/439665726_3337106776594242_4391882337700252928_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&_nc_cb=99be929b-713f6db7&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHafDFiVt1SmbCXYX_J28v3hgR4qCIfaqGGBHioIh9qoXfZy8bBWeHchvHxe4TkxTbVKoTBKuLhrjDwkRJkm8zo&_nc_ohc=by47g2zuD1oQ7kNvgF8fbLg&_nc_ht=scontent.fisb13-1.fna&oh=00_AfBdivgC3CHbev7DXYIr5E4B7CgC6HgOhf65pE-Nv2uM7w&oe=6641B751",desc:"detail about Friend"},
    {roll:2835,name:"Friend 4 Name",imgSrc:"https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-6/363988499_619339480332729_6132596186444877357_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&_nc_cb=99be929b-713f6db7&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEkjEomvS_uQ4tqAv3WG2g_L6Ot23A3Hcwvo63bcDcdzA8YtupI8OFUdIAFsk-bjdI812lsz-9g7AbVj1dZkJEb&_nc_ohc=jj2_V347g_wQ7kNvgHLeF8F&_nc_ht=scontent.fisb13-1.fna&oh=00_AfBL-FDan4G_vytst4HlFpfz2_2LwjGkjBKoAnHdIPlf3Q&oe=6641C47F",desc:"detail about Friend"},
    {roll:2865,name:"Friend 5 Name",imgSrc:"https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-6/343307949_764811291941089_1302726713439855182_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFYNryeb2ZywHTgR4dVH3JDjUZWBWrVqv6NRlYFatWq_gescjEtzmkDat1fuERRqh-XA7L2lcmxs9UHRLdQorSX&_nc_ohc=WvTk9d5tejsQ7kNvgEiVOUd&_nc_ht=scontent.fisb13-1.fna&oh=00_AfCVIG0lBJBx0ADNDBpcCQk-bH_dUO-vW1Eq7bWy1NJqOA&oe=6641A9AB",desc:"detail about Friend"},
    {roll:2847,name:"Friend 6 Name",imgSrc:"https://png.pngtree.com/png-vector/20200224/ourmid/pngtree-colorful-loading-icon-png-image_2152960.jpg", desc:"detail about Friend"}
]

// This function empty the mainComp Div if anything Present and Display all photos and detail present in data variable
function allPho()
{
    mainComp.innerHTML="";
    for(let i=0; i<data.length; i++)
    {
        show(i);
    }
}

// This function check Roll Number validation and display only the enter Roll Number detail
function oper()
{
    if(roll.value==="")
    {
        alert("Please Enter the Roll Number first.");
    }
    else
    {
        for(let i=0; i<data.length; i++)
        {
            if(parseInt(roll.value)===data[i].roll)
            {
                mainComp.innerHTML="";
                show(i)
            }
            else if(roll.value!==data[data.length-1].roll)
            {
                alert("Invalid Roll Number");
            }
        }
    }
}

// This function create tags to display details
function show(i)
{
    let div1=document.createElement("div");
    div1.style.width="18rem";
    div1.setAttribute("class","card mx-3 mb-4 col-md-3");

    let img=document.createElement("img")
    img.setAttribute("class","card-img-top")
    img.src=data[i].imgSrc

    let div2=document.createElement("div")
    div2.setAttribute("class","card-body")

    let h5=document.createElement("h5")
    h5.setAttribute("class","card-title")
    h5.innerHTML=data[i].name;

    let p=document.createElement("p")
    p.setAttribute("class","card-text")
    p.innerHTML=data[i].desc;

    mainComp.appendChild(div1);
    div1.appendChild(img)
    div1.appendChild(div2)
    div2.appendChild(h5)
    div2.appendChild(p)
}