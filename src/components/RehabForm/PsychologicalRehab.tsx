import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export function PsychologicalRehab({ formData, setFormData }: any) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">4. Психологическая реабилитация</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-2">
          <Label>Оценка психологического состояния (0-10)</Label>
          <Slider
            value={[formData.psychologicalState]}
            onValueChange={(value) => setFormData({ ...formData, psychologicalState: value[0] })}
            max={10}
            step={1}
          />
          <div className="text-right text-sm text-muted-foreground">
            {formData.psychologicalState}/10
          </div>
        </div>

        <div className="grid gap-4">
          <Label className="text-base">Отметьте, что вы испытываете:</Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={formData.hasAnxiety}
              onCheckedChange={(checked) => setFormData({ ...formData, hasAnxiety: checked })}
            />
            <Label>Тревожность</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={formData.hasDepression}
              onCheckedChange={(checked) => setFormData({ ...formData, hasDepression: checked })}
            />
            <Label>Депрессия</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={formData.hasStress}
              onCheckedChange={(checked) => setFormData({ ...formData, hasStress: checked })}
            />
            <Label>Стресс</Label>
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Дополнительные комментарии</Label>
          <Textarea
            value={formData.psychologicalNotes}
            onChange={(e) => setFormData({ ...formData, psychologicalNotes: e.target.value })}
            placeholder="Опишите ваши проблемы со сном, концентрацией или аппетитом"
          />
        </div>
      </CardContent>
    </Card>
  );
}