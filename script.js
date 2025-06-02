const questions = {
  easy: [
    {
      question: "Find the Maximum Element",
      description: "Given an array, return the maximum element.",
      hint: "Use Math.max or a loop to compare values."
    },
    {
      question: "Check if Array is Sorted",
      description: "Determine whether an array is sorted in non-decreasing order.",
      hint: "Loop and compare each pair."
    },
    {
      question: "Find the Sum of All Elements",
      description: "Return the sum of all elements in an array.",
      hint: "Use Array.prototype.reduce()."
    },
    {
      question: "Count Even and Odd Numbers",
      description: "Count how many even and odd numbers are present.",
      hint: "Use modulo operator."
    },
    {
      question: "Reverse an Array",
      description: "Return the array in reverse order.",
      hint: "Use the reverse() method."
    }
  ],
  medium: [
    {
      question: "Move Zeros to End",
      description: "Move all 0s to the end while maintaining order.",
      hint: "Use two pointers or filter + push."
    },
    {
      question: "Remove Duplicates from Sorted Array",
      description: "Return array with unique elements.",
      hint: "Compare adjacent values or use Set."
    },
    {
      question: "Find the Second Largest Element",
      description: "Return the second largest number.",
      hint: "Track max and second max."
    },
    {
      question: "Rotate Array by k Steps",
      description: "Rotate the array to the right by k steps.",
      hint: "Use slice and concat."
    },
    {
      question: "Find Missing Number in Array",
      description: "Find missing number from 1 to n+1.",
      hint: "Use sum formula: n(n+1)/2."
    }
  ],
  hard: [
    {
      question: "Maximum Subarray Sum (Kadane’s Algorithm)",
      description: "Find the subarray with max sum.",
      hint: "Track max_ending_here and max_so_far."
    },
    {
      question: "Trapping Rain Water",
      description: "Calculate total trapped water.",
      hint: "Use two-pointer technique with leftMax and rightMax."
    },
    {
      question: "Median of Two Sorted Arrays",
      description: "Find the median of two sorted arrays.",
      hint: "Use merge and median logic."
    },
    {
      question: "Merge Intervals",
      description: "Merge overlapping intervals.",
      hint: "Sort by start, then merge."
    },
    {
      question: "Maximum Product Subarray",
      description: "Find the max product of a subarray.",
      hint: "Track both max and min at each step."
    }
  ]
};

function createCard(q) {
  const div = document.createElement("div");
  div.className = "question-card";
  div.innerHTML = `
    <h3>${q.question}</h3>
    <p>${q.description}</p>
    <button class="show-btn" onclick="this.nextElementSibling.style.display='block'">Show Hint</button>
    <div class="hint"><p><strong>Hint:</strong> ${q.hint}</p></div>
  `;
  return div;
}

function showQuestions() {
  document.getElementById("waiting").style.display = "none";
  document.getElementById("question-sections").style.display = "block";
  ["easy", "medium", "hard"].forEach(level => {
    const container = document.getElementById(`${level}-questions`);
    questions[level].forEach(q => container.appendChild(createCard(q)));
  });
}

function checkTimeAndShow() {
  const now = new Date();
  const unlockHour = 14;
  const unlockMinute = 10;

  if (now.getHours() > unlockHour || (now.getHours() === unlockHour && now.getMinutes() >= unlockMinute)) {
    showQuestions();
  } else {
    document.getElementById("waiting").style.display = "flex";
    document.getElementById("question-sections").style.display = "none";
    setTimeout(checkTimeAndShow, 10000); // recheck every 10 seconds
  }
}

window.onload = checkTimeAndShow;

