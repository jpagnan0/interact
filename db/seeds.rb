puts 'delete users...'
User.destroy_all
User.reset_pk_sequence
# User.create(name: "Dr. Pill")
#
# puts 'delete medications...'
# Medication.destroy_all
# Medication.reset_pk_sequence
# puts 'create medications...'
# Medication.create(rxcui: '1011485', name: 'cetirizine hydrochloride 10 MG Disintegrating Oral Tablet [Zyrtec]', name_alt: 'Zyrtec 10 MG Disintegrating Oral Tablet')
# Medication.create(rxcui: '1014677', name: 'cetirizine hydrochloride 5 MG Oral Tablet [Zyrtec]', name_alt: 'Zyrtec 5 MG Oral Tablet')
# Medication.create(rxcui: '1020021', name: 'cetirizine hydrochloride 1 MG/ML Oral Solution [Zyrtec]', name_alt: 'Zyrtec 1 MG/ML Oral Solution')
# Medication.create(rxcui: '1020022', name: 'cetirizine hydrochloride 10 MG Chewable Tablet [Zyrtec]', name_alt: 'Zyrtec 10 MG Chewable Tablet')
# Medication.create(rxcui: '1020023', name: 'cetirizine hydrochloride 10 MG Oral Capsule [Zyrtec]', name_alt: 'Zyrtec 10 MG Oral Capsule')
# Medication.create(rxcui: '1020026', name: 'cetirizine hydrochloride 10 MG Oral Tablet [Zyrtec]', name_alt: 'Zyrtec 10 MG Oral Tablet')
# Medication.create(rxcui: '583482', name: 'Azithromycin 33.3 MG/ML Extended Release Suspension [Zmax]', name_alt: 'Zmax 33.3 MG/ML Extended Release Suspension')
# Medication.create(rxcui: '836366', name: '200 ACTUAT Albuterol 0.09 MG/ACTUAT / Ipratropium Bromide 0.018 MG/ACTUAT Metered Dose Inhaler [Combivent]', name_alt: 'Combivent (albuterol 0.09 MG/ACTUAT / ipratropium bromide 0.018 MG/ACTUAT) Metered Dose Inhaler, 200 ACTUAT')
# Medication.create(rxcui: '1190225', name: '120 ACTUAT Albuterol 0.1 MG/ACTUAT / Ipratropium Bromide 0.02 MG/ACTUAT Metered Dose Inhaler [Combivent]', name_alt: 'Combivent 20/100 (ipratropium bromide / albuterol) Metered Dose Inhaler, 120 ACTUAT')
# Medication.create(rxcui: '746763', name: '200 ACTUAT Albuterol 0.09 MG/ACTUAT Metered Dose Inhaler [Proventil]', name_alt: 'Proventil HFA 90 MCG/ACTUAT Metered Dose Inhaler, 200 ACTUAT')
# Medication.create(rxcui: '1437704', name: 'Albuterol 0.833 MG/ML / Ipratropium Bromide 0.167 MG/ML Inhalation Solution [DuoNeb]', name_alt: 'DuoNeb (albuterol 0.0833 % / ipratropium bromide 0.0167 % ) Inhalation Solution')
# Medication.create(rxcui: '352051', name: 'Albuterol 0.417 MG/ML Inhalation Solution [Accuneb]', name_alt: 'Accuneb 0.417 MG/ML Inhalation Solution')
# Medication.create(rxcui: '745752', name: '200 ACTUAT Albuterol 0.09 MG/ACTUAT Metered Dose Inhaler [ProAir]', name_alt: '200 ACTUAT ProAir 0.09 MG/ACTUAT Metered Dose Inhaler')
# Medication.create(rxcui: '1649961', name: '200 ACTUAT Albuterol 0.09 MG/ACTUAT Dry Powder Inhaler [ProAir]', name_alt: '200 ACTUAT ProAir 0.09 MG/ACTUAT Dry Powder Inhaler')
# Medication.create(rxcui: '801095', name: '60 ACTUAT Albuterol 0.09 MG/ACTUAT Metered Dose Inhaler [Ventolin]', name_alt: 'Ventolin HFA 0.09 MG/ACTUAT Metered Dose Inhaler, 60 ACTUAT')
# Medication.create(rxcui: '859088', name: '200 ACTUAT Albuterol 0.09 MG/ACTUAT Metered Dose Inhaler [Ventolin]', name_alt: 'Ventolin HFA 0.09 MG/ACTUAT Metered Dose Inhaler, 200 ACTUAT')
# Medication.create(rxcui: '153741', name: 'Albuterol 4 MG Extended Release Oral Capsule', name_alt: '')
# Medication.create(rxcui: '197318', name: 'Albuterol 4 MG Oral Tablet', name_alt: 'albuterol 4 MG (as albuterol sulfate 4.8 MG) Oral Tablet')
# Medication.create(rxcui: '359144', name: '12 HR Albuterol 4 MG Extended Release Oral Tablet', name_alt: 'albuterol 4 MG 12 HR Extended Release Oral Tablet')
# Medication.create(rxcui: '197316', name: 'Albuterol 2 MG Oral Tablet', name_alt: 'albuterol 2 MG (as albuterol sulfate 2.4 MG) Oral Tablet')
# Medication.create(rxcui: '745679', name: '200 ACTUAT Albuterol 0.09 MG/ACTUAT Metered Dose Inhaler', name_alt: 'albuterol 0.09 MG/ACTUAT 200 ACTUAT Metered Dose Inhaler')
# Medication.create(rxcui: '801092', name: '60 ACTUAT Albuterol 0.09 MG/ACTUAT Metered Dose Inhaler', name_alt: 'Albuterol 0.09 MG/ACTUAT 60 ACTUAT Metered Dose Inhaler')
# Medication.create(rxcui: '836286', name: '200 ACTUAT Albuterol 0.09 MG/ACTUAT / Ipratropium Bromide 0.018 MG/ACTUAT Metered Dose Inhaler', name_alt: 'albuterol 0.09 MG / ipratropium bromide 0.018 MG per ACTUAT Metered Dose Inhaler, 200 ACTUAT')
# Medication.create(rxcui: '1649560', name: '200 ACTUAT Albuterol 0.09 MG/ACTUAT Dry Powder Inhaler', name_alt: 'albuterol 90 MCG/ACTUAT Dry Powder Inhaler, 200 ACTUAT')
# Medication.create(rxcui: '755497', name: 'Albuterol 0.4 MG/ML Oral Solution', name_alt: 'albuterol 2 MG per 5 ML Syrup')
# Medication.create(rxcui: '247044', name: 'Albuterol 0.05 MG/ML Injectable Solution', name_alt: '')
# Medication.create(rxcui: '1190220', name: '120 ACTUAT Albuterol 0.1 MG/ACTUAT / Ipratropium Bromide 0.02 MG/ACTUAT Metered Dose Inhaler', name_alt: 'albuterol 0.1 MG/ACTUAT / ipratropium bromide 0.02 MG/ACTUAT Metered Dose Inhaler, 120 ACTUAT')
# Medication.create(rxcui: '359145', name: '12 HR Albuterol 8 MG Extended Release Oral Tablet', name_alt: 'albuterol 8 MG 12 HR Extended Release Oral Tablet')
# Medication.create(rxcui: '392321', name: 'Albuterol 8 MG Oral Tablet', name_alt: '')
# Medication.create(rxcui: '1362214', name: 'Albuterol 1 MG/ML / Ipratropium Bromide 0.2 MG/ML Inhalation Solution', name_alt: 'albuterol 2.5 MG / ipratropium bromide 0.5 MG per 2.5 ML Inhalation Solution')
# Medication.create(rxcui: '247840', name: 'Albuterol 2 MG/ML Inhalation Solution', name_alt: 'albuterol 5 MG per 2.5 ML Inhalation Solution')
# Medication.create(rxcui: '351137', name: 'Albuterol 0.21 MG/ML Inhalation Solution', name_alt: 'albuterol sulfate 0.021 % (0.63 MG/3 ML) Inhalation Solution')
# Medication.create(rxcui: '630208', name: 'Albuterol 0.83 MG/ML Inhalation Solution', name_alt: 'albuterol 0.083 % Inhalation Solution')
# Medication.create(rxcui: '351136', name: 'Albuterol 0.417 MG/ML Inhalation Solution', name_alt: 'albuterol 0.042 % (1.25 MG/3 ML) Inhalation Solution')
# Medication.create(rxcui: '1437702', name: 'Albuterol 0.833 MG/ML / Ipratropium Bromide 0.167 MG/ML Inhalation Solution', name_alt: 'albuterol 2.5 MG (as albuterol sulfate 3 MG) / ipratropium bromide 0.5 MG per 3 ML Inhalation Solution')
# Medication.create(rxcui: '104514', name: 'Albuterol 0.4 MG Inhalation Powder', name_alt: 'albuterol 400 MCG/ACTUAT Inhalation Powder')
# Medication.create(rxcui: '245314', name: 'Albuterol 5 MG/ML Inhalation Solution', name_alt: 'albuterol 0.5 % Concentrate for Inhalation Solution')
# Medication.create(rxcui: '307779', name: 'Albuterol 0.2 MG Inhalation Powder', name_alt: 'albuterol 200 MCG/ACTUAT Inhalation Powder')
# Medication.create(rxcui: '252298', name: 'Albuterol 0.1 MG Inhalation Powder', name_alt: '')
#
# med1=Medication.find_by(rxcui: '583482').id
# med2=Medication.find_by(rxcui: '1011485').id
# med3=Medication.find_by(rxcui: '836366').id
# med4=Medication.find_by(rxcui: '1011485').id
# med5=Medication.find_by(rxcui: '583482').id
# med6=Medication.find_by(rxcui: '836366').id

puts 'delete interactions...'
Interaction.destroy_all
Interaction.reset_pk_sequence
puts 'create interactions...'

# binding.pry
# Interaction.create(medication_one_id: med1, medication_two_id: med2)
# Interaction.create(medication_one_id: med2, medication_two_id: med1)
# Interaction.create(medication_one_id: med3, medication_two_id: med4)
# Interaction.create(medication_one_id: med4, medication_two_id: med3)
# Interaction.create(medication_one_id: med5, medication_two_id: med6)
# Interaction.create(medication_one_id: med6, medication_two_id: med5)

UserMedication.destroy_all
UserMedication.reset_pk_sequence
# UserMedication.create(user_id: 1, medication_id: med1)
# UserMedication.create(user_id: 1, medication_id: med2)
# UserMedication.create(user_id: 1, medication_id: med3)
