class InteractionSerializer < ActiveModel::Serializer
  attributes :id, :medication_one_id,:medication_two_id,:comment,:description,:name_one,:name_two
  belongs_to :medication_one, class_name: "Medication"
  belongs_to :medication_two, class_name: "Medication"
end
