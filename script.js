function showSkills() {
      const dropdown = document.getElementById("skillList");
      const selected = dropdown.value;
      const display = document.getElementById("skillsDisplay");

      if (selected === "design") {
        display.innerHTML = " <ul style ='list-style-type: disc;'><li>Figma</li><br><li>Adobe Photoshop</li><br><li>Adobe Illustrator</li><br><li>Blender</li><br><li>Maya</li></ul>";
      } else if (selected === "development") {
        display.innerHTML = "<ul style ='list-style-type: disc;'><li>Python</li><br><li>C++</li><br><li>C#</li><br><li>HTML</li><br><li>CSS</li><br><li>MySQL</li><br><li>Java</li><br><li>Dart</li><br><li>Kotlin</li><br><li>JavaScript</li></ul>";
      } else if (selected === "frameworks") {
        display.innerHTML = "<ul style ='list-style-type: disc;'><li>VS Code</li><br><li>Android Studio</li><br><li>Unity</li><br><li>Flutter</li><br><li>Firebase</li></ul>";
      } else {
        display.innerHTML = "";
      }
    }