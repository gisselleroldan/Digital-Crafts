body = document.body;
nav = document.createElement("nav");
body.append(nav);
div1 = document.createElement('div')
nav.append(div1)
div1.setAttribute('class', '1 container mx-auto mb-3')
div2 = document.createElement('div')
div1.append(div2)
div2.setAttribute('class', '2 row bg-info d-flex justify-content-center align-items-center')
h1 = document.createElement('h1')
h1.setAttribute('class', '1 col text-white')
h1.textContent = "High on Coding"
homeAnchor = document.createElement('a')
homeAnchor.setAttribute('class', '3 col text-white text-decoration-none')
homeAnchor.setAttribute('href', '#')
catAnchor = document.createElement('a')
catAnchor.setAttribute('class', '4 col text-white text-decoration-none')
catAnchor.setAttribute('href', '#')
homeAnchor.textContent = "Home"
catAnchor.textContent = "Categories"
div2.append(h1)
div2.append(homeAnchor)
div2.append(catAnchor)

main = document.createElement('main')
body.append(main)
div5 = document.createElement('div')
main.append(div5)
div5.setAttribute('class', '5 container mx-auto')
div6 = document.createElement('div')
div5.append(div6)
div6.setAttribute('class', '6 row bg-secondary mb-3')
h1_2= document.createElement('h1')
h1_2.setAttribute('class', '2 col-12')
h1_2.textContent = "Curse of the Current Reviews"
div6.append(h1_2)
div7 = document.createElement('div')
div7.setAttribute('class', '7 row')
div6.append(div7)
div7.textContent = `When you want to buy any application from the Apple iTunes store you
have more choices than you can handle. Most of the users scroll past
the application description completely avoiding it like ads
displayed on the right column of your webpage. Their chouce is
dependent on three important factors: price, screenshot, and
reviews.`;



function createDiv(classValue){
    var div = document.createElement('div');
    div.setAttribute('class', classValue);

    return div
}

div8 = createDiv("8 row mb-3")
div5.append(div8)

function createh4(classValue){
    var h4 = document.createElement('h4');
    h4.setAttribute('class', classValue);

    return h4
}

h4_1 = createh4("1 col-12 text-primary")
h4_1.textContent = "Hello Watch Kit"
div8.append(h4_1)

div9 = createDiv('9 col-12')
div9.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
animi aperiam itaque, placeat voluptatibus soluta vel natus, numquam
deleniti tempora autem illum dolores dicta saepe perspiciatis
similique repellat dolorem sequi?`
div8.append(div9)

div10 = createDiv('10 row bg-warning m-0')
div8.append(div10)

// line 48
div11 = createDiv('11 col-2 bg')
div11.textContent = "12 Comments"
div12 = createDiv('12 col-2 bg')
div12.textContent = "124 Likes"

div10.append(div11, div12)

// line 52
div13 = createDiv('13 row')
div5.append(div13)
h4_2 = createh4("2 col-12 text-primary")
h4_2.textContent = "Introduction to Swift"
div13.append(h4_2)

div14 = createDiv('14 col-12')
div14.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
animi aperiam itaque, placeat voluptatibus soluta vel natus, numquam
deleniti tempora autem illum dolores dicta saepe perspiciatis
similique repellat dolorem sequi?`
div13.append(div14)

div15 = createDiv('15 row bg-warning m-0')
div13.append(div15)

// line 48
div16 = createDiv('16 col-2')
div16.textContent = "15 Comments"
div17 = createDiv('17 col-2')
div17.textContent = "45 Likes"

div15.append(div16, div17)
