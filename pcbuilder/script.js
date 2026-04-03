const answers = {};

const builds = {
  gaming: {
    budget: {
      badge: '🎮',
      title: 'Budget Gaming Build',
      desc: 'Great for 1080p gaming at medium-to-high settings. Solid performance without breaking the bank.',
      parts: {
        CPU: 'AMD Ryzen 5 5600',
        GPU: 'NVIDIA RTX 3060 or AMD RX 6650 XT',
        RAM: '16GB DDR4-3200 (2x8GB)',
        Storage: '1TB NVMe SSD',
        Motherboard: 'B550 Micro-ATX',
        PSU: '650W 80+ Bronze',
        Case: 'Mid-Tower ATX',
        Cooling: 'Stock or Budget Air Cooler'
      }
    },
    mid: {
      badge: '🎮',
      title: 'Mid-Range Gaming Build',
      desc: 'Smooth 1080p or 1440p gaming at high settings. A great sweet spot for most gamers.',
      parts: {
        CPU: 'AMD Ryzen 5 7600X or Intel i5-13600K',
        GPU: 'NVIDIA RTX 4070 or AMD RX 7800 XT',
        RAM: '32GB DDR5-5600 (2x16GB)',
        Storage: '1TB NVMe SSD',
        Motherboard: 'B650 or Z790 ATX',
        PSU: '750W 80+ Gold',
        Case: 'Mid-Tower ATX',
        Cooling: 'DeepCool AK620 Air Cooler'
      }
    },
    high: {
      badge: '🎮',
      title: 'High-Performance Gaming Build',
      desc: 'Handles 1440p ultra and 4K gaming with ease. Future-proof for years to come.',
      parts: {
        CPU: 'AMD Ryzen 7 7700X or Intel i7-13700K',
        GPU: 'NVIDIA RTX 4080 Super',
        RAM: '32GB DDR5-6000 (2x16GB)',
        Storage: '2TB NVMe SSD',
        Motherboard: 'X670E or Z790 ATX',
        PSU: '850W 80+ Gold',
        Case: 'Mid/Full-Tower ATX',
        Cooling: '240mm AIO Liquid Cooler'
      }
    },
    ultra: {
      badge: '🚀',
      title: 'Ultimate Gaming Rig',
      desc: 'Top-tier 4K gaming, max settings, max frames. The best hardware money can buy.',
      parts: {
        CPU: 'Intel Core i9-14900K or AMD Ryzen 9 7950X3D',
        GPU: 'NVIDIA RTX 4090',
        RAM: '64GB DDR5-6400 (2x32GB)',
        Storage: '4TB NVMe SSD (2x2TB)',
        Motherboard: 'Z790 or X670E Premium ATX',
        PSU: '1000W 80+ Platinum',
        Case: 'Full-Tower ATX',
        Cooling: '360mm AIO Liquid Cooler'
      }
    }
  },
  creative: {
    budget: {
      badge: '🎨',
      title: 'Budget Creative Build',
      desc: 'Entry-level video editing and content creation. Handles 1080p editing without a struggle.',
      parts: {
        CPU: 'AMD Ryzen 5 5600X (6 cores)',
        GPU: 'NVIDIA RTX 3060 (for GPU encoding)',
        RAM: '32GB DDR4-3200 (2x16GB)',
        Storage: '1TB NVMe SSD + 2TB HDD',
        Motherboard: 'B550 ATX',
        PSU: '650W 80+ Bronze',
        Case: 'Mid-Tower ATX',
        Cooling: 'Noctua NH-U12S Air Cooler'
      }
    },
    mid: {
      badge: '🎨',
      title: 'Mid-Range Creator Build',
      desc: 'Smooth 4K editing, color grading, and rendering. Great for YouTubers and freelancers.',
      parts: {
        CPU: 'AMD Ryzen 7 7700X (8 cores)',
        GPU: 'NVIDIA RTX 4070 Ti Super',
        RAM: '64GB DDR5-5600 (2x32GB)',
        Storage: '2TB NVMe SSD + 4TB HDD',
        Motherboard: 'X670 ATX',
        PSU: '800W 80+ Gold',
        Case: 'Mid-Tower ATX',
        Cooling: '240mm AIO Liquid Cooler'
      }
    },
    high: {
      badge: '🎨',
      title: 'Pro Creator Build',
      desc: '4K and 8K video, 3D rendering, complex timelines. Built for serious professional work.',
      parts: {
        CPU: 'AMD Ryzen 9 7950X (16 cores)',
        GPU: 'NVIDIA RTX 4080 Super',
        RAM: '128GB DDR5-5600 (4x32GB)',
        Storage: '4TB NVMe SSD + 8TB HDD',
        Motherboard: 'X670E ATX',
        PSU: '1000W 80+ Gold',
        Case: 'Full-Tower ATX',
        Cooling: '360mm AIO Liquid Cooler'
      }
    },
    ultra: {
      badge: '🎨',
      title: 'Studio Workstation',
      desc: 'No compromises. Handles any creative workload — from 8K film to massive 3D scenes.',
      parts: {
        CPU: 'AMD Ryzen Threadripper 7970X',
        GPU: 'NVIDIA RTX 4090',
        RAM: '256GB DDR5 ECC RAM',
        Storage: '8TB NVMe SSD (RAID)',
        Motherboard: 'TRX50 WRX80 Workstation',
        PSU: '1600W 80+ Platinum',
        Case: 'Full-Tower / Server Case',
        Cooling: '420mm AIO or Custom Loop'
      }
    }
  },
  work: {
    budget: {
      badge: '💼',
      title: 'Budget Work & School PC',
      desc: 'Everything you need for documents, spreadsheets, video calls, and browsing. Fast and reliable.',
      parts: {
        CPU: 'Intel Core i3-12100 or AMD Ryzen 5 5500',
        GPU: 'Integrated Graphics (no dedicated GPU needed)',
        RAM: '16GB DDR4-3200',
        Storage: '512GB NVMe SSD',
        Motherboard: 'B660 or B550 mATX',
        PSU: '450W 80+ Bronze',
        Case: 'Micro-ATX Mini Tower',
        Cooling: 'Stock Cooler'
      }
    },
    mid: {
      badge: '💼',
      title: 'Productivity Powerhouse',
      desc: 'Handles heavy multitasking, virtual machines, and demanding software with ease.',
      parts: {
        CPU: 'Intel Core i5-13600K or AMD Ryzen 7 7700',
        GPU: 'NVIDIA RTX 4060 (optional for light creative)',
        RAM: '32GB DDR5-5200',
        Storage: '1TB NVMe SSD',
        Motherboard: 'B760 or B650 ATX',
        PSU: '650W 80+ Gold',
        Case: 'Mid-Tower ATX',
        Cooling: 'DeepCool AK500 Air Cooler'
      }
    },
    high: {
      badge: '💼',
      title: 'Professional Workstation',
      desc: 'Runs multiple VMs, massive spreadsheets, databases, and development environments simultaneously.',
      parts: {
        CPU: 'AMD Ryzen 9 7900X or Intel Core i9-13900',
        GPU: 'NVIDIA RTX 4070 (or professional GPU)',
        RAM: '64GB DDR5-5600',
        Storage: '2TB NVMe SSD',
        Motherboard: 'X670 or Z790 ATX',
        PSU: '750W 80+ Gold',
        Case: 'Mid-Tower ATX',
        Cooling: '240mm AIO Liquid Cooler'
      }
    },
    ultra: {
      badge: '💼',
      title: 'Enterprise Workstation',
      desc: 'Maximum professional performance. Handles anything enterprise software can throw at it.',
      parts: {
        CPU: 'AMD Ryzen Threadripper 7960X',
        GPU: 'NVIDIA RTX 4000 Ada (Pro GPU)',
        RAM: '128GB DDR5 ECC',
        Storage: '4TB NVMe SSD (RAID)',
        Motherboard: 'TRX50 WRX80',
        PSU: '1200W 80+ Platinum',
        Case: 'Full-Tower',
        Cooling: '360mm AIO'
      }
    }
  },
  streaming: {
    budget: {
      badge: '📡',
      title: 'Budget Streaming + Gaming Build',
      desc: 'Stream and game at the same time without major frame drops. Smart component choices.',
      parts: {
        CPU: 'AMD Ryzen 5 5600X (6 cores)',
        GPU: 'NVIDIA RTX 3060 (NVENC encoder)',
        RAM: '32GB DDR4-3200',
        Storage: '1TB NVMe SSD',
        Motherboard: 'B550 ATX',
        PSU: '650W 80+ Bronze',
        Case: 'Mid-Tower ATX',
        Cooling: 'Noctua NH-U12A Air Cooler'
      }
    },
    mid: {
      badge: '📡',
      title: 'Streamer & Gamer Build',
      desc: 'High-quality 1080p-1440p stream while gaming at solid frames. The streamer sweet spot.',
      parts: {
        CPU: 'AMD Ryzen 7 7700X or Intel i7-13700K',
        GPU: 'NVIDIA RTX 4070 Super (NVENC)',
        RAM: '32GB DDR5-6000',
        Storage: '2TB NVMe SSD',
        Motherboard: 'B650 or Z790 ATX',
        PSU: '800W 80+ Gold',
        Case: 'Mid-Tower ATX',
        Cooling: '240mm AIO Liquid Cooler'
      }
    },
    high: {
      badge: '📡',
      title: 'Pro Streamer Build',
      desc: '4K streaming, face cam, overlays, and still playing at ultra settings. No compromises.',
      parts: {
        CPU: 'AMD Ryzen 9 7950X3D',
        GPU: 'NVIDIA RTX 4080 Super',
        RAM: '64GB DDR5-6000',
        Storage: '2TB NVMe SSD + 4TB HDD',
        Motherboard: 'X670E ATX',
        PSU: '1000W 80+ Gold',
        Case: 'Full-Tower ATX',
        Cooling: '360mm AIO Liquid Cooler'
      }
    },
    ultra: {
      badge: '📡',
      title: 'Broadcasting Beast',
      desc: 'For professional streamers and content studios. The absolute best for live production.',
      parts: {
        CPU: 'Intel Core i9-14900KS',
        GPU: 'NVIDIA RTX 4090',
        RAM: '128GB DDR5-7200',
        Storage: '4TB NVMe SSD',
        Motherboard: 'Z790 Premium ATX',
        PSU: '1200W 80+ Platinum',
        Case: 'Full-Tower ATX',
        Cooling: '420mm AIO Liquid Cooler'
      }
    }
  },
  general: {
    budget: {
      badge: '🌐',
      title: 'Everyday Budget PC',
      desc: 'Browse, stream, email, video calls — everything a typical user needs at a low cost.',
      parts: {
        CPU: 'AMD Ryzen 3 4100 or Intel Core i3-12100',
        GPU: 'Integrated Graphics',
        RAM: '8GB DDR4 (upgradeable to 16GB)',
        Storage: '500GB NVMe SSD',
        Motherboard: 'B450 or H610 mATX',
        PSU: '400W 80+ Bronze',
        Case: 'Micro-ATX Mini Tower',
        Cooling: 'Stock Cooler'
      }
    },
    mid: {
      badge: '🌐',
      title: 'Capable Everyday PC',
      desc: 'A smooth, snappy experience for all everyday tasks with room to do more.',
      parts: {
        CPU: 'Intel Core i5-12400 or AMD Ryzen 5 5600',
        GPU: 'NVIDIA GTX 1660 Super (for light gaming)',
        RAM: '16GB DDR4-3200',
        Storage: '1TB NVMe SSD',
        Motherboard: 'B560 or B550 ATX',
        PSU: '550W 80+ Bronze',
        Case: 'Mid-Tower ATX',
        Cooling: 'Stock or Budget Cooler'
      }
    },
    high: {
      badge: '🌐',
      title: 'Premium Everyday Build',
      desc: 'Fast, quiet, and responsive. Everything runs instantly and upgrades are easy.',
      parts: {
        CPU: 'Intel Core i5-13600K',
        GPU: 'NVIDIA RTX 4060',
        RAM: '32GB DDR5-5200',
        Storage: '1TB NVMe SSD',
        Motherboard: 'B760 ATX',
        PSU: '650W 80+ Gold',
        Case: 'Mid-Tower ATX',
        Cooling: 'DeepCool AK400 Air Cooler'
      }
    },
    ultra: {
      badge: '🌐',
      title: 'Top-Tier Everyday Powerhouse',
      desc: 'Way more than you need for everyday use, but future-proof and absolutely blazing fast.',
      parts: {
        CPU: 'AMD Ryzen 7 7700X',
        GPU: 'NVIDIA RTX 4070',
        RAM: '32GB DDR5-6000',
        Storage: '2TB NVMe SSD',
        Motherboard: 'X670 ATX',
        PSU: '750W 80+ Gold',
        Case: 'Mid-Tower ATX',
        Cooling: '240mm AIO Liquid Cooler'
      }
    }
  }
};

function selectOption(button) {
  const q = button.getAttribute('data-q');
  const val = button.getAttribute('data-val');

  const allInGroup = document.querySelectorAll(`.option[data-q="${q}"]`);
  allInGroup.forEach(b => b.classList.remove('selected'));
  button.classList.add('selected');

  answers[q] = val;

  setTimeout(() => {
    const nextQ = parseInt(q) + 1;
    const nextQuestion = document.getElementById(`q${nextQ}`);
    const current = document.getElementById(`q${q}`);

    if (nextQuestion) {
      current.classList.remove('active');
      nextQuestion.classList.add('active');
      updateProgress(nextQ);
    } else {
      showResult();
    }
  }, 350);
}

function updateProgress(qNum) {
  const fill = document.getElementById('progressFill');
  const text = document.getElementById('progressText');
  const pct = Math.round((qNum / 3) * 100);
  fill.style.width = pct + '%';
  text.textContent = `Question ${qNum} of 3`;
}

function showResult() {
  const use = answers[1] || 'gaming';
  const budget = answers[2] || 'mid';

  const build = builds[use] && builds[use][budget]
    ? builds[use][budget]
    : builds['gaming']['mid'];

  document.getElementById('resultBadge').textContent = build.badge;
  document.getElementById('resultTitle').textContent = build.title;
  document.getElementById('resultDesc').textContent = build.desc;

  const partsEl = document.getElementById('resultParts');
  partsEl.innerHTML = '';
  for (const [label, value] of Object.entries(build.parts)) {
    const div = document.createElement('div');
    div.className = 'result-part';
    div.innerHTML = `<div class="part-label">${label}</div><div class="part-value">${value}</div>`;
    partsEl.appendChild(div);
  }

  document.querySelector('.quiz-container').style.display = 'none';
  const resultEl = document.getElementById('result');
  resultEl.classList.remove('hidden');
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetQuiz() {
  Object.keys(answers).forEach(k => delete answers[k]);

  document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
  document.getElementById('q1').classList.add('active');
  document.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));

  document.getElementById('progressFill').style.width = '33%';
  document.getElementById('progressText').textContent = 'Question 1 of 3';

  document.getElementById('result').classList.add('hidden');
  document.querySelector('.quiz-container').style.display = '';

  document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.option').forEach(btn => {
  btn.addEventListener('click', () => selectOption(btn));
});
