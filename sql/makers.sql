DROP TABLE IF EXISTS maker_skill;
DROP TABLE IF EXISTS skill;
DROP TABLE IF EXISTS portfolio;
DROP TABLE IF EXISTS profile;


CREATE TABLE profile
(
    profile_id UUID NOT NULL,
    profile_about_me VARCHAR(350),
    profile_activation_token CHAR(32),
    profile_email VARCHAR(128) NOT NULL UNIQUE,
    profile_full_name VARCHAR(32) NOT NULL,
    profile_hash CHAR(97) NOT NULL,
    profile_image_url VARCHAR(128),
    profile_is_maker BOOLEAN NOT NULL,
    profile_name VARCHAR(64) NOT NULL UNIQUE,
    profile_pricing VARCHAR(128),
    PRIMARY KEY (profile_id)
);

CREATE TABLE portfolio
(
    portfolio_id UUID NOT NULL,
    portfolio_profile_id UUID NOT NULL,
    portfolio_image_url VARCHAR(256),
    PRIMARY KEY (portfolio_id),
    FOREIGN KEY (portfolio_profile_id) REFERENCES profile (profile_id)
);
CREATE INDEX ON profile (profile_id);

CREATE TABLE skill
(
    skill_id UUID NOT NULL,
    skill_type VARCHAR(64),
    skill_icon_url VARCHAR(256),
    skill_is_popular BOOLEAN,
    PRIMARY KEY (skill_id)
);

CREATE TABLE maker_skill
(
    maker_skill_id UUID NOT NULL,
    maker_skill_maker_profile_id UUID NOT NULL,
    FOREIGN KEY (maker_skill_maker_profile_id) REFERENCES profile (profile_id),
    FOREIGN KEY (maker_skill_id) REFERENCES skill (skill_id),
    PRIMARY KEY (maker_skill_id, maker_skill_maker_profile_id)
        );
CREATE INDEX ON profile (profile_id);
CREATE INDEX ON skill (skill_id);