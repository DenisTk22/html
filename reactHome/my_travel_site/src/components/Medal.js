
export default function Medal({ id, travels}) {

     const travelsData = JSON.parse(travels);

    return (
       

        travelsData.forEach(travel => {

            const solovkiMyTravelsEl = document.querySelector(`{.${id}__my-travels}`);

            const travelEl = document.createElement('div');
            travelEl.classList.add(`{${id}__travel)}`);
            solovkiMyTravelsEl.append(travelEl);

            const travelNameEl = document.createElement('p');
            travelNameEl.classList.add(`{${id}__travel_name}`);
            travelNameEl.textContent = `${travel.TravelName}`;
            travelEl.append(travelNameEl);

            const travelLinkEl = document.createElement('a');
            travelLinkEl.classList.add(`{${id}__travel_link}`);
            travelLinkEl.href = `${travel.Link}`;
            travelEl.append(travelLinkEl);

            const travelPhotoEl = document.createElement('img');
            travelPhotoEl.classList.add(`{${id}__travel_photo}`);
            travelPhotoEl.src = travel.Photo;
            travelPhotoEl.setAttribute('alt', `${travel.TravelName}`);
            travelLinkEl.append(travelPhotoEl);

            const shortDescriptionEl = document.createElement('p');
            shortDescriptionEl.classList.add(`{${id}__travel_shortDescription}`);
            shortDescriptionEl.textContent = travel.ShortDescription;
            travelEl.append(shortDescriptionEl);

        })
        // <div className={`${id}__my-travels`}>

        // </div>
)}