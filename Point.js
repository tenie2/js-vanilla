class Point
{
    constructor(x, y, type=null)
    {
        this.m_x = Number(x);
        this.m_y = Number(y);
        this.m_type = type;
    }
    GetX()
    {
        return Number(this.m_x);
    }
    GetY()
    {
        return Number(this.m_y);
    }
    SetX(x)
    {
        this.m_x = Number(x);
    }
    SetY(y)
    {
        this.m_y = Number(y);
    }
    SetType(type)
    {
        this.m_type = type;
    }
    GetType()
    {
        return this.m_type;
    }
    GetPoint()
    {
        var string_to_return = "";
        if(this.m_type!=null)
        {
            string_to_return+=" "+this.m_type+" "+Number(this.m_x)+","+Number(this.m_y);
        }
        else
        {
            string_to_return+=" "+Number(this.m_x)+","+Number(this.m_y)+" ";
        }

        return string_to_return;

    }
    SetPoint(x, y, type=null)
    {
        this.m_x = Number(x);
        this.m_y = Number(y);
        if(type!=null)
        {
            this.m_type = type;
        }
    }
};
