import { sql } from '../database.utils'

export interface Skill {
    skillId: string|null
    skillType: string
    skillIconUrl: string
    skillIsPopular: boolean
}

export async function selectSkillbySkillId (skillId: string): Promise<Skill|null> {
    const result = <Skill[]> await sql`SELECT skill_id, skill_type, skill_icon_url, skill_is_popular FROM skill WHERE skill_id = ${skillId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectAllSkills (): Promise<Skill[]> {
    return sql<Skill[]> `SELECT skill_id, skill_type, skill_icon_url, skill_is_popular FROM skill ORDER BY skill_type DESC`
}

export async function selectAllIsPopularSkills (): Promise<Skill[]> {
    return sql<Skill[]> `SELECT skill_id, skill_type, skill_icon_url, skill_is_popular FROM skill WHERE skill_is_popular = true ORDER BY skill_type DESC`
}
