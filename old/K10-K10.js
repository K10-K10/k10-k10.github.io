document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByTagName('body')[0].innerHTML = '<div id="main">' + document.getElementsByTagName('body')[0].innerHTML + '</div>'
    document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', '<div id="header"></div>')
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<div id="footer"></div>')

    var tag_target = document.getElementsByTagName('h2')
    if (tag_target.length != 0) {
        document.getElementsByTagName('h1')[0].insertAdjacentHTML('afterend', '<div id="tag"></div>')
        for (i = 0; i < tag_target.length; i++) {
            tag_target[i].setAttribute("id", tag_target[i].innerText)
            document.getElementById('tag').insertAdjacentHTML('beforeend', '<a href="#' + tag_target[i].id + '">' + (i + 1) + '.' + tag_target[i].id + '</a>\n')
        }
        document.getElementById('tag').insertAdjacentHTML('beforebegin', '<h2>目次<h2>')
    }

    var img = document.getElementsByTagName('img')
    for (let i = 0; i < img.length; i++) {
        img[i].setAttribute('alt', '画像の読み込みに失敗しました。')
    }

    let code_target = document.getElementsByTagName('pre')
    for (let i = 0; i < code_target.length; i++) {
        code_target[i].setAttribute('id', 'code' + i)
        document.getElementById('code' + i).insertAdjacentHTML('beforebegin', '<div class="copy-button-box"><button class="copy-button" id="button' + i + '" onclick="copy(' + i + ')">copy</button></div>')
    }

    document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', '<link rel="shortcut icon" type="image/x-icon" href="https://github.com/k10-k10.png">')

    // Add smooth scroll behavior
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const target = document.querySelector(this.getAttribute('href'));
    //         if (target) {
    //             target.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start'
    //             });
    //         }
    //     });
    // });

    // Add fade-in animation for headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    headings.forEach(heading => {
        heading.style.opacity = '0';
        heading.style.transform = 'translateY(20px)';
        heading.style.transition = 'opacity,transform 0.5s ease';
        observer.observe(heading);
    });

    // Add hover effect for code blocks
    // const codeBlocks = document.querySelectorAll('pre');
    // codeBlocks.forEach(block => {
    //     block.addEventListener('mouseenter', () => {
    //         block.style.transform = 'translateY(-2px)';
    //         block.style.boxShadow = '0 4px 8px rgba(0, 102, 159, 0.2)';
    //     });

    //     block.addEventListener('mouseleave', () => {
    //         block.style.transform = 'translateY(0)';
    //         block.style.boxShadow = '5px 5px var(--shadow-color)';
    //     });
    // });

    // Add button hover animations
    // const buttons = document.querySelectorAll('button');
    // buttons.forEach(button => {
    //     button.addEventListener('mouseenter', () => {
    //         button.style.transform = 'translateY(-2px)';
    //         button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    //     });

    //     button.addEventListener('mouseleave', () => {
    //         button.style.transform = 'translateY(0)';
    //         button.style.boxShadow = 'none';
    //     });

    //     button.addEventListener('mousedown', () => {
    //         button.style.transform = 'translateY(1px)';
    //     });

    //     button.addEventListener('mouseup', () => {
    //         button.style.transform = 'translateY(-2px)';
    //     });
    // });

    // Add smooth transition for links
    // const links = document.querySelectorAll('a');
    // links.forEach(link => {
    //     link.addEventListener('mouseenter', () => {
    //         link.style.transition = 'color 0.2s ease';
    //     });
    // });

    //Add copy button functionality for code blocks
    // const copyButtons = document.querySelectorAll('.copy-button');
    // copyButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         const codeBlock = button.closest('pre').querySelector('code');
    //         if (codeBlock) {
    //             navigator.clipboard.writeText(codeBlock.textContent).then(() => {
    //                 const originalText = button.textContent;
    //                 button.textContent = 'Copied!';
    //                 button.style.backgroundColor = '#4CAF50';
    //                 setTimeout(() => {
    //                     button.textContent = originalText;
    //                     button.style.backgroundColor = '';
    //                 }, 2000);
    //             });
    //         }
    //     });
    // });

    // Add smooth page transitions
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.id = "progressBar"
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
});

function copy(target_id) {
    var target = document.getElementById('code' + target_id)
    navigator.clipboard.writeText(target.textContent)
    document.getElementById('button' + target_id).textContent = 'copied!'
    setTimeout(function () {
        document.getElementById('button' + target_id).textContent = 'copy'
    }, 1000)
}

function goToPage() {
    window.location.href = '/';
}
