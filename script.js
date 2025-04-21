document.addEventListener('DOMContentLoaded', () => {
    fetch('resource.json')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('resource-list');
  
        data.forEach(item => {
          const card = document.createElement('div');
          card.className = 'resource-card';
  
          // Top icons
          const icons = document.createElement('div');
          icons.className = 'icons';
          ['clock','desktop','piggy-bank'].forEach(fa => {
            const i = document.createElement('i');
            i.className = `fas fa-${fa}`;
            icons.appendChild(i);
          });
          card.appendChild(icons);
  
          // Image
          const img = document.createElement('img');
          img.src = item.image;
          card.appendChild(img);
  
          // Heart
          const heart = document.createElement('i');
          heart.className = 'far fa-heart heart';
          card.appendChild(heart);
  
          // Content
          const content = document.createElement('div');
          content.className = 'card-content';
  
          const h3 = document.createElement('h3');
          h3.textContent = item.name;
          content.appendChild(h3);
  
          const meta = document.createElement('p');
          meta.className = 'meta';
          meta.innerHTML = `
            Type of Service: ${item.type.replace(/[\[\]]/g,'')}<br>
            Location: ${item.location.replace(/[\[\]]/g,'')}<br>
            Age Group: ${item.age}<br>
            ${item['additional-info'].includes('Need Appointment') ? 'Appointment Needed' : ''}
          `;
          content.appendChild(meta);
  
          const cta = document.createElement('a');
          cta.className = 'cta';
          cta.textContent = 'More Details';
          cta.href = item.website.startsWith('http') ? item.website : `https://${item.website}`;
          cta.target = '_blank';
          content.appendChild(cta);
  
          card.appendChild(content);
          container.appendChild(card);
        });
      })
      .catch(err => console.error('JSON load error:', err));
  });
  

  