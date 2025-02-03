// Show/Hide Sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
}

// Arrays Example
function showArrayExample() {
    const fruits = ["apple", "banana", "orange", "grape", "mango"];
    let output = "Original array: " + fruits.join(", ") + "<br>";
    output += "First fruit: " + fruits[0] + "<br>";
    output += "Array length: " + fruits.length + "<br>";
    output += "Added 'pear': " + [...fruits, "pear"].join(", ");
    
    document.getElementById("array-output").innerHTML = output;
}

// Loops Example
function showLoopExample() {
    let output = "";
    
    // For loop
    output += "For loop counting to 5:<br>";
    for(let i = 1; i <= 5; i++) {
        output += i + " ";
    }
    
    output += "<br><br>While loop counting down:<br>";
    let count = 3;
    while(count > 0) {
        output += count + " ";
        count--;
    }
    
    document.getElementById("loop-output").innerHTML = output;
}

// Conditionals Example
function checkAge() {
    const age = document.getElementById("ageInput").value;
    let message;
    
    if(age < 13) {
        message = "You're too young for high school!";
    } else if(age >= 13 && age <= 18) {
        message = "You're the perfect age for high school!";
    } else {
        message = "You're older than a typical high school student!";
    }
    
    document.getElementById("conditional-output").innerHTML = message;
}

// Functions Example
function greetUser() {
    const name = document.getElementById("nameInput").value;
    const greeting = createGreeting(name);
    document.getElementById("function-output").innerHTML = greeting;
}

function createGreeting(name) {
    if(!name) return "Please enter a name!";
    return `Hello, ${name}! Welcome to JavaScript basics!`;
}

// Events Example
document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById("clickMe");
    const colorBox = document.getElementById("colorBox");
    const eventOutput = document.getElementById("event-output");
    let clickCount = 0;
    let hoverTimer = null;
    let hoverSeconds = 0;
    
    // Track hover events with timer
    colorBox.addEventListener('mouseenter', () => {
        hoverTimer = setInterval(() => {
            hoverSeconds++;
            eventOutput.innerHTML = `Hover time: ${hoverSeconds} seconds`;
        }, 1000);
    });

    colorBox.addEventListener('mouseleave', () => {
        clearInterval(hoverTimer);
    });

    // Track click events
    clickButton.addEventListener('click', () => {
        clickCount++;
        eventOutput.innerHTML = `Button clicked: ${clickCount} times`;
    });
});

// Show Lists section by default when page loads
document.addEventListener('DOMContentLoaded', () => {
    showSection('lists');
});

$(document).ready(function(){
    // Sticky navbar on scroll
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation script
    var typed = new Typed(".typing", {
        strings: ["Arrays", "Loops", "Functions", "Events", "Conditionals"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// Coding Challenge Functions
const sampleSolution = `function addNumbers(a, b) {
    return a + b;
}

// Test the function
console.log(addNumbers(5, 3));`;

function runCode() {
    const code = document.getElementById('codeInput').value;
    const outputDiv = document.getElementById('challenge-output');
    
    try {
        // Capture console.log output
        let output = '';
        const originalLog = console.log;
        console.log = (...args) => {
            output += args.join(' ') + '\n';
        };

        // Run the code
        eval(code);

        // Restore console.log
        console.log = originalLog;

        // Display output
        outputDiv.innerHTML = output || 'Your code ran successfully!';
        outputDiv.style.color = '#4CAF50';
        
        // Save to localStorage
        localStorage.setItem('savedCode', code);
    } catch (error) {
        outputDiv.innerHTML = 'Error: ' + error.message;
        outputDiv.style.color = '#ff0000';
    }
}

function showHint() {
    const codeInput = document.getElementById('codeInput');
    let currentText = codeInput.value;
    
    if (!currentText.includes('function')) {
        codeInput.value = 'function addNumbers(a, b) {\n    \n}';
    } else if (!currentText.includes('return')) {
        codeInput.value = 'function addNumbers(a, b) {\n    return \n}';
    } else {
        codeInput.value = sampleSolution;
    }
}

function resetCode() {
    document.getElementById('codeInput').value = '';
    document.getElementById('challenge-output').innerHTML = 'Output will appear here...';
    document.getElementById('challenge-output').style.color = '';
    localStorage.removeItem('savedCode');
}

// Load saved code on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedCode = localStorage.getItem('savedCode');
    if (savedCode) {
        document.getElementById('codeInput').value = savedCode;
    }
});
