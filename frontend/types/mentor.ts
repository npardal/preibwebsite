type subjectStrengthType = {
    subject: string,
    strength: number
}
type mentorType = {
    id:string,
    firstName: string,
    lastName: string,
    country: string,
    subjectStrength: subjectStrengthType[],
    // TEMP
    courses: subjectStrengthType[],

    description: string,
    languages: string[],
    image_url: string,
    rating: number;
}

export type {mentorType, subjectStrengthType};