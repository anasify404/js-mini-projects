      const form = document.querySelector("form");
      const main = document.querySelector("#main");
      const profileSection = document.querySelector("#profile-section");
      const demoCard = document.querySelector("#demo-card");
      const inputs = document.querySelectorAll("input");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        demoCard.setAttribute("hidden", "true");

        const card = document.createElement("div");
        card.classList.add("profileCard");

        const pfp = document.createElement("div");
        pfp.classList.add("pfp");

        const pfpimg = document.createElement("img");
        pfpimg.src = e.target[3].value || "https://placehold.co/150";
        pfp.alt = "pfp";

        const name = document.createElement("h3");
        name.classList.add("name");
        name.textContent = e.target[0].value;

        const occupation = document.createElement("h5");
        occupation.classList.add("occupation");
        occupation.textContent = e.target[1].value;

        const info = document.createElement("p");
        info.classList.add("info");
        info.textContent = e.target[2].value;

        pfp.append(pfpimg);

        card.append(pfp);
        card.append(name);
        card.append(occupation);
        card.append(info);
        profileSection.append(card);

        form.reset();
      });
