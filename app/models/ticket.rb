class Ticket < ActiveRecord::Base
  @ticket = "create_ticket"
 

  def create_ticket(email, talk)
    if Talk.find(talk).limit <= 0
     "ERROR"
    else  
      Ticket.create(:registra=>email, :talk_id=>talk)
    end

  end

end
