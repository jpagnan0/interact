class GetUserInteractions
  attr_reader :user, :results

  def initialize(user)
    @user = user
  end

  def execute
    fetch_interactions_from_api
    create_interactions
  end

  # private
  def interactions_url(user_rxcuis)
    url = "https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=#{user_rxcuis}"
    url
  end

  def interaction_description(interaction)
    interaction["interactionPair"].select do |pair|
      pair["interactionConcept"]
    end.map do |concept|
      concept["description"]
    end[0]
  end

  def names(interaction)
    c = []
    interaction["interactionPair"].select do |pair|
      pair["interactionConcept"].map do |concept|
        c << concept["minConceptItem"]["name"]
      end
    end
    c
  end

  def parse_interaction_results(res)
    json = JSON.parse(res)
    # if !!json["fullInteractionTypeGroup"]
    # binding.pry
    # if !!json["fullInteractionTypeGroup"]
    interaction_group = json["fullInteractionTypeGroup"].select do |group|
      group["fullInteractionType"]
    end.map do |group|
      group["fullInteractionType"]
    end.flatten
    # binding.pry
    # end
    interaction_pairs = interaction_group.map do |interaction|
      {
        comment: interaction["comment"],
        interaction_pair: {
          medication_one: interaction["minConcept"][0]["rxcui"],
          medication_two: interaction["minConcept"][1]["rxcui"]
        },
        description: interaction_description(interaction),
        name_one: names(interaction)[0],
        name_two: names(interaction)[1]
      }
    end.flatten
    interaction_pairs
  end

  def fetch_interactions_from_api
    # binding.pry
    user_rxcuis = @user.medications.pluck(:rxcui).join("+")
    res = RestClient.get("https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis="+user_rxcuis) #interactions_url(user_rxcuis)
    # binding.pry
    @results = parse_interaction_results(res)
  end

  def interaction_struct
    return {} unless @results

    @results.map do |interaction|
      m_one_id = Medication.find_by(rxcui: interaction[:interaction_pair][:medication_one]).id
      m_two_id = Medication.find_by(rxcui: interaction[:interaction_pair][:medication_two]).id
      {
        medication_one: m_one_id,#Medication.find_by(rxcui: interaction[:interaction_pair][:medication_one]).id,
        medication_two: m_two_id,#Medication.find_by(rxcui: interaction[:interaction_pair][:medication_two]).id,
        comment: interaction[:comment],
        description: interaction[:description],
        name_one: interaction[:name_one],
        name_two: interaction[:name_two]
      }
    end
  end

  def create_interactions
    # if !@results
    #   []
    # else
    #   Interaction.create(interaction_med_ids) unless @results
    # end
    if !@results
      {}
    else

      interaction_struct.map do |i|
        Interaction.find_or_create_by(
          medication_one_id: i[:medication_one],
          medication_two_id: i[:medication_two],
          comment: i[:comment],
          description: i[:description],
          name_one: i[:name_one],
          name_two: i[:name_two]
        )
      end
      # binding.pry
    end
  end
end
