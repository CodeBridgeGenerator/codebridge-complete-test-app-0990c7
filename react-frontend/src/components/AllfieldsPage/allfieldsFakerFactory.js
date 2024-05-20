
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
fieldText1: faker.lorem.sentence(1),
fieldTextArea2: faker.lorem.sentence(1),
fieldTextIcon4: faker.lorem.sentence(1),
fieldTextImage5: faker.lorem.sentence(1),
fieldTextChip6: faker.lorem.sentence(1),
fieldTextTag7: faker.lorem.sentence(1),
fieldBooleanText1: faker.lorem.sentence(1),
fieldBooleanTick2: faker.lorem.sentence(1),
fieldBooleanCheckBox3: faker.lorem.sentence(1),
fieldBooleanSwitch4: faker.lorem.sentence(1),
fieldNumberText1: faker.lorem.sentence(1),
fieldNumberBadge3: faker.lorem.sentence(1),
fieldNumberKnob4: faker.lorem.sentence(1),
fieldNumberRating5: faker.lorem.sentence(1),
fieldNumberSlider6: faker.lorem.sentence(1),
fieldNumberProgressBar7: faker.lorem.sentence(1),
fieldNumberCurrency8: faker.lorem.sentence(1),
fieldDateText1: faker.lorem.sentence(1),
fieldDateCalendar2: faker.lorem.sentence(1),
fieldDateRange3: faker.lorem.sentence(1),
fieldDateMulti4: faker.lorem.sentence(1),
fieldDateTime5: faker.lorem.sentence(1),
fieldDateTime126: faker.lorem.sentence(1),
fieldDateTime247: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
