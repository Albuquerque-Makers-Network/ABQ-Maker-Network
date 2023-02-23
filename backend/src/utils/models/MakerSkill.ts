import {sql} from "../database.utils";


export interface MakerSkill {
  makerSkillMakerProfileId: string
  makerSkillId: string

}

/**
 * Function to insert profile object into postgres database
 * @param makerskill Profile object that will be inserted into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function insertMakerSkill (makerskill: MakerSkill): Promise<string> {
  const {makerSkillMakerProfileId, makerSkillId} = makerskill
  await sql `INSERT INTO maker_skill (maker_skill_maker_profile_id, maker_skill_id) VALUES (${makerSkillMakerProfileId}, ${makerSkillId})`
  return 'Maker skill successfully updated'
}

export async function selectMakerSkillBySkillId (makerSkillId: string): Promise<MakerSkill[]> {
  return <MakerSkill[]>
  await sql `SELECT maker_skill_maker_profile_id, maker_skill_id FROM maker_skill WHERE maker_skill_id = ${makerSkillId}`
}

export async function selectMakerSkillByProfileId (makerSkillMakerProfileId: string): Promise<MakerSkill[]> {
  return <MakerSkill[]> await sql `SELECT maker_skill_maker_profile_id, maker_skill_id FROM maker_skill WHERE maker_skill_maker_profile_id = ${makerSkillMakerProfileId}`
}

export async function deleteMakerSkill (makerskill: MakerSkill): Promise<string> {
  const {makerSkillMakerProfileId, makerSkillId} = makerskill
  await sql `DELETE FROM maker_skill WHERE maker_skill_maker_profile_id = ${makerSkillMakerProfileId} AND maker_skill_id = ${makerSkillId}`
  return 'Maker skill successfully deleted'
}


//export async function selectMakerSkillByMakerSkillID
//isn't this the same as by skill id